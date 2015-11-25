var FlashActions = {
    receiveErrors: function (errors) {
      AppDispatcher.dispatch({
        actionType: FlashConstants.RECEIVE_ERRORS,
        errors: errors
      });

    },

    resetErrors: function () {
      AppDispatcher.dispatch({
        actionType: FlashConstants.RESET_ERRORS,
      });
    }
};
