(function (root) {

  // array of cat objects
  var _cats = [];
  var CHANGE_EVENT = 'change';
  var _resetCats = function (cats) {
    _cats = cats;
  };




  var CatStore = root.CatStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _cats;
    },

    filterCatByName: function (param) {
      _cats.filter( function (cat) {
        return cat.name.toLowerCase().startsWith(param.name.toLowerCase());
      });
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
        case CatConstants.SEARCH_CATS:
          _resetCats(CatStore.filterCatByName(payload.params));
          CatStore.emit(CHANGE_EVENT);

      }

    })



});




})(this);
