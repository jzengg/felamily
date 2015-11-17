(function (root) {

  var _filters = null;
  var _resetFilters = function (params) {
    _filters = params;
  };
  var CHANGE_EVENT = 'change';

  var FilterStore = root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _filters;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FilterConstants.RECEIVE_PARAMS:
            _resetFilters(payload.params);
            FilterStore.emit(CHANGE_EVENT);
          break;

      }
    })

  });

})(this);
