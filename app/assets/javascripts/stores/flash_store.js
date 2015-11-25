(function (root) {

  var _flash = [];
  var CHANGE_EVENT = 'change';
  var _addError = function (error) {
    _flash = _flash.concat(error);
  };
  var _resetErrors = function () {
     _flash = [];
  };

  var FlashStore = root.FlashStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      var errors = _flash.slice();
      _flash = [];
      return errors;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FlashConstants.RECEIVE_ERRORS:
            _addError(payload.errors);
            FlashStore.emit(CHANGE_EVENT);
          break;
        case FlashConstants.RESET_ERRORS:
          _resetErrors();
          FlashStore.emit(CHANGE_EVENT);
          break;

      }
    })



  });

})(this);
