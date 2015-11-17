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

  createCat: function (cat) {
    $.ajax({
      url: 'api/cats',
      type: 'POST',
      data: {cat: cat},
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveNewCat(data);
      }

    });
  }




};
