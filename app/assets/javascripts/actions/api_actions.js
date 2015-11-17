ApiActions = {

  receiveCats: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.CATS_RECEIVED,
      cats: data
    });
  },

  receiveNewCat: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.NEW_CAT,
      cat: data
    });
  }




};
