ApiActions = {

  receiveCats: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.CATS_RECEIVED,
      cats: data
    });
  },




};
