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
      },
      error: function (data) {
        FlashActions.receiveErrors(data.responseJSON);
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
        FlashActions.receiveErrors(["Changes saved"]);
        callback && callback();
      }
    });
  },

  destroyCat: function (id, callback) {
    $.ajax({
      url: 'api/cats/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        ApiActions.removeCat(id);
        callback && callback();
      }
    });
  }





};
