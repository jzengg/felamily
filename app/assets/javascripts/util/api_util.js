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

  createCat: function (formData, callback) {
    $.ajax({
      url: 'api/cats',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (data) {
        ApiActions.receiveNewCat(data);
        callback && callback(data.id);
      }
    });
  },

  updateCat: function (id, formData, callback) {
    $.ajax({
      url: 'api/cats/' + id,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (data) {
        ApiActions.updateCat(data);
        callback && callback();
      }
    });
  }




};
