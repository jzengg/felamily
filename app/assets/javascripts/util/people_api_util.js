var PeopleApiUtil = {
  fetchPeople: function () {
    $.ajax({
      url: 'api/people',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PersonApiActions.receivePeople(data);
      }
    });
  },

};
