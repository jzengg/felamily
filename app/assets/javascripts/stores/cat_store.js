(function (root) {

  // array of cat objects
  var _cats = [];
  var CHANGE_EVENT = 'change';
  var NEW_CAT_EVENT = 'new_cat';

  var _resetCats = function (cats) {
    _cats = cats;
  };
  var _addCat = function (cat) {
    _cats.push(cat);
  };

  var CatStore = root.CatStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _cats.slice();
    },

    findCat: function (id) {
      return _cats.find( function (cat) {
        return cat.id == id;
      });
    },

    filtered: function (searchString) {
      if (typeof searchString == "undefined") {
        return;
      }
      var filtered = _cats.filter( function (cat) {
        return cat.name.toLowerCase().includes(searchString.toLowerCase());
        // add support for including results if cat id matches
      });
      return filtered;
    },

    addNewCatListener: function (callback) {
      this.on(NEW_CAT_EVENT, callback);
    },
    removeNewCatListener: function (callback) {
      this.removeListener(NEW_CAT_EVENT, callback);
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
        case CatConstants.NEW_CAT:
          _addCat(payload.cat);
          CatStore.emit(CHANGE_EVENT);
          CatStore.emit(NEW_CAT_EVENT);
          break;

      }
    })
  });
})(this);
