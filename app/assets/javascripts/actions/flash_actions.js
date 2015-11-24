var FlashActions = {
    receiveErrors: function (errors) {
      AppDispatcher.dispatch({
        actionType: FlashConstants.RECEIVE_ERRORS,
        errors: errors
      });

    }
};
