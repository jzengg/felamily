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
  },

  receiveOneCat: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.RECEIVE_ONE_CAT,
      cat: data
    });
  },

  updateCat: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.UPDATE_CAT,
      cat: data
    });
  }




};
