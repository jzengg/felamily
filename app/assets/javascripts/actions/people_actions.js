PersonApiActions = {

  receivePeople: function (data) {
    AppDispatcher.dispatch({
      actionType: PeopleConstants.PEOPLE_RECEIVED,
      people: data
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
  },

  removeCat: function (id) {
    AppDispatcher.dispatch({
      actionType: CatConstants.REMOVE_CAT,
      id: id
    });
  }




};
