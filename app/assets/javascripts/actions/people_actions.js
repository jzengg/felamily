var PersonApiActions = {

  receivePeople: function (data) {
    AppDispatcher.dispatch({
      actionType: PeopleConstants.PEOPLE_RECEIVED,
      people: data
    });
  },




};
