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

  fetchOneCat: function (catId) {
    $.ajax({
      url: 'api/cats/'+catId,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveOneCat(data);
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
