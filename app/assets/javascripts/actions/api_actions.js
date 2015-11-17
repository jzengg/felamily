ApiActions = {

  receiveCats: function (data) {
    AppDispatcher.dispatch({
      actionType: CatConstants.CATS_RECEIVED,
      cats: data
    });
  },

  searchCats: function (param) {
    AppDispatcher.dispatch({
      actionType: CatConstants.SEARCH_CATS,
      params: param
    });
  }




};
