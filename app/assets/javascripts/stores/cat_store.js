(function (root) {

  // array of cat objects
  var _cats = [];
  var CHANGE_EVENT = 'change';
  var _resetCats = function (cats) {
    _cats = cats;
  };




  var CatStore = root.CatStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _cats.slice();
    },

    filtered: function (searchString) {
      if (typeof searchString == "undefined") {
        return;
      }
      var filtered = _cats.filter( function (cat) {
        return cat.name.toLowerCase().includes(searchString.toLowerCase());
      });
      return filtered;
    },

    addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherId: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case CatConstants.CATS_RECEIVED:
          _resetCats(payload.cats);
          CatStore.emit(CHANGE_EVENT);
          break;


      }

    })



});




})(this);
