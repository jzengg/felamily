(function (root){

  var CHANGE_EVENT = 'change';

  var _vaccines = [];
  var _addVaccine = function (vaccines) {
    _vaccines = _vaccines.concat(vaccines);
  };
  var VaccineStore = root.VaccineStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function () {
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (vaccineId) {
      return _vaccines.find(function (vaccine) {
        return vaccine.id == vaccineId;
      });
    },

    all: function () {
      return _vaccines.slice();
    },

    dispatcherId: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case VaccineConstants.RECEIVE_VACCINES:
            _addVaccine(payload.vaccine);
            VaccineStore.emit(CHANGE_EVENT);
          break;
      }
    }),
  });
})(this);
