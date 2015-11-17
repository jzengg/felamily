ApiUtil = {

  fetchCats: function () {
    $.ajax({
      url: 'api/cats',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveCats(data);
      }
    });
  },

  


};
