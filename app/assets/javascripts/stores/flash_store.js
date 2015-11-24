(function (root) {

  var _flash = [];
  var CHANGE_EVENT = 'change';
  var _addError = function (error) {
    _flash = _flash.concat(error);
  };

  var FlashStore = root.FlashStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _flash.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FlashConstants.RECEIVE_ERRORS:
            _addError(payload.errors);
            FlashStore.emit(CHANGE_EVENT);
          break;

      }
    })



  });

})(this);
