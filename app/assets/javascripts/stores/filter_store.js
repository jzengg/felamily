(function (root) {

  var _filters;
  var CHANGE_EVENT = 'change';

  var _setFilters = function (params) {
    _filters = params;
    // may want to make this into an object for advanced search
    // so we can handle all the attributes people want to search for
  };

  var _resetFilters = function () {
    _filters = undefined;
  };

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
            _setFilters(payload.params);
            FilterStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.RESET_PARAMS:
          _resetFilters();
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
