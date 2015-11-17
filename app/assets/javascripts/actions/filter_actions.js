FilterActions = {

  receiveParams: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RECEIVE_PARAMS,
      params: params
    });
  },

  resetParams: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_PARAMS,
    });
  }

};
