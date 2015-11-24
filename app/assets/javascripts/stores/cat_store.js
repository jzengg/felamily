(function (root) {

  // array of cat objects
  var _cats = [];
  var CHANGE_EVENT = 'change';
  var RECEIVE_ONE_CAT_EVENT = 'receive_one_cat';
  var UPDATE_CAT_EVENT = 'update_cat';
  var REMOVE_CAT_EVENT = 'remove_cat';

  var _resetCats = function (cats) {
    _cats = cats;
  };

  var _addCat = function (cat) {
    if (!_hasDup(cat)) {
      _cats.push(cat);
    }
  };

  var _addVaccine = function (cat, vaccine) {
    for (var i = 0; i < _cats.length; i++) {
      if (cat.id == _cats[i].id) {
        _cats[i].vaccines.push(vaccine);
      }
    }
  };

  var _findCat = function (cat) {
    for (var i = 0; i < _cats.length; i++) {
      if (_cats[i].id == cat.id) {
        return i;
      }
    }
  };

  var _updateVaccine = function (cat, vaccine) {
    for (var i = 0; i < _cats.length; i++) {
      if (cat.id == _cats[i].id) {
        for (var j = 0; j < _cats.vaccines.length; j++) {
          if (_cats.vaccines[j] == vaccine.id) {
            _cats.vaccines[j] = vaccine;
          }
        }
      }
    }
  };

  var _updateCat = function (cat) {
    var id = cat.id;
    for (var i = 0; i < _cats.length; i++) {
      if (cat.id == _cats[i].id) {
        _cats[i] = cat;
      }
    }
  };

  var _removeCat = function (id) {
    for (var i = 0; i < _cats.length; i++) {
      if (_cats[i].id == id) {
        _cats.splice(i, 1);
        return;
      }
    }
  };

  var _hasDup = function (cat) {
    for (var i = 0; i < _cats.length; i++) {
      if (cat.id == _cats[i].id) {
        _cats[i] = cat;
        return true;
      }
    }
    return false;
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
        return (
          cat.name.toLowerCase().includes(searchString.toLowerCase())
        ) ;


        // add support for including results if cat id matches
      });
      return filtered;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    addUpdateCatListener: function(callback){
      this.on(UPDATE_CAT_EVENT, callback);
    },
    removeUpdateCatListener: function(callback){
      this.removeListener(UPDATE_CAT_EVENT, callback);
    },

    addReceiveOneCatListener: function(callback){
      this.on(RECEIVE_ONE_CAT_EVENT, callback);
    },
    removeReceiveOneCatListener: function(callback){
      this.removeListener(RECEIVE_ONE_CAT_EVENT, callback);
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
          break;
        case CatConstants.RECEIVE_ONE_CAT:
          _addCat(payload.cat);
          CatStore.emit(RECEIVE_ONE_CAT_EVENT);
          break;
        case CatConstants.UPDATE_CAT:
          _updateCat(payload.cat);
          CatStore.emit(RECEIVE_ONE_CAT_EVENT);
          break;
        case CatConstants.REMOVE_CAT:
          _removeCat(payload.id);
          CatStore.emit(CHANGE_EVENT);
          break;
        case VaccineConstants.ADD_CAT_VACCINES:
          _addVaccine(payload.data.cat, payload.data.vaccine);
          CatStore.emit(RECEIVE_ONE_CAT_EVENT);
          break;
        case VaccineConstants.UPDATE_CAT_VACCINES:
          _updateVaccine(payload.data.cat, payload.data.vaccine);
          CatStore.emit(RECEIVE_ONE_CAT_EVENT);
          break;


      }
    })
  });
})(this);
