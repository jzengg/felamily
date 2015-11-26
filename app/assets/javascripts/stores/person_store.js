(function (root) {

  // array of cat objects
  var _people = [];
  var CHANGE_EVENT = 'change';


  var _resetPeople = function (people) {
    _people = people;
  };

  var _addPerson = function (person) {
    if (!_hasDup(person)) {
      _people.push(person);
    }
  };

  // var _addVaccine = function (cat, vaccine) {
  //   for (var i = 0; i < _cats.length; i++) {
  //     if (cat.id == _cats[i].id) {
  //       _cats[i].vaccines.push(vaccine);
  //       return;
  //     }
  //   }
  // };

  // var _updateVaccine = function (cat) {
  //   for (var i = 0; i < _cats.length; i++) {
  //     if (cat.id == _cats[i].id) {
  //       _cats[i] = cat;
  //       return;
  //     }
  //   }
  // };

  var _updatePerson = function (person) {
    for (var i = 0; i < _people.length; i++) {
      if (person.id == _people[i].id) {
        _people[i] = person;
        return;
      }
    }
  };

  var _removePerson = function (id) {
    for (var i = 0; i < _people.length; i++) {
      if (_people[i].id == id) {
        _people.splice(i, 1);
        return;
      }
    }
  };

  var _hasDup = function (person) {
    for (var i = 0; i < _people.length; i++) {
      if (person.id == _people[i].id) {
        _people[i] = person;
        return true;
      }
    }
    return false;
  };

  var PersonStore = root.PersonStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _people.slice();
    },

    findPerson: function (id) {
      return people.find( function (person) {
        return person.id == id;
      });
    },

    filtered: function (searchString) {
      if (typeof searchString == "undefined") {
        return;
      }
      var attributes = ["fname", "lname", "email"];
      var filtered = _people.filter( function (person) {
        return (
             attributes.some(function (attr) {
              return person[attr].toLowerCase().includes(searchString.toLowerCase());
            })
        ) ;

      });
      return filtered;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    // addUpdateCatListener: function(callback){
    //   this.on(UPDATE_CAT_EVENT, callback);
    // },
    // removeUpdateCatListener: function(callback){
    //   this.removeListener(UPDATE_CAT_EVENT, callback);
    // },
    //
    // addReceiveOneCatListener: function(callback){
    //   this.on(RECEIVE_ONE_CAT_EVENT, callback);
    // },
    // removeReceiveOneCatListener: function(callback){
    //   this.removeListener(RECEIVE_ONE_CAT_EVENT, callback);
    // },

    dispatcherId: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PeopleConstants.PEOPLE_RECEIVED:
          _resetPeople(payload.people);
          PersonStore.emit(CHANGE_EVENT);
          break;

      }
    })
  });
})(this);
