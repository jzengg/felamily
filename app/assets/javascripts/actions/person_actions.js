var PersonApiActions = {

  receivePeople: function (data) {
    AppDispatcher.dispatch({
      actionType: PersonConstants.PEOPLE_RECEIVED,
      people: data
    });
  },

  receiveNewPerson: function (data) {
    AppDispatcher.dispatch({
      actionType: PersonConstants.NEW_PERSON,
      person: data
    });
  },

  receiveOnePerson: function (data) {
    AppDispatcher.dispatch({
      actionType: PersonConstants.RECEIVE_ONE_PERSON,
      person: data
    });
  },

  updatePerson: function (data) {
    AppDispatcher.dispatch({
      actionType: PersonConstants.UPDATE_PERSON,
      person: data
    });
  },

  removePerson: function (id) {
    AppDispatcher.dispatch({
      actionType: PersonConstants.REMOVE_PERSON,
      id: id
    });
  }



};
