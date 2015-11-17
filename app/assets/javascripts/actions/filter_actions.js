FilterActions = {

  receiveParams: function (params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RECEIVE_PARAMS,
      params: params
    });

  }

};
