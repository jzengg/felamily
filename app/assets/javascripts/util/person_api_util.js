var PersonApiUtil = {
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

  fetchOnePerson: function (personId) {
    $.ajax({
      url: 'api/people/'+personId,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PersonApiActions.receiveOnePerson(data);
      }
    });
  },

  createPerson: function (formData, callback) {
    $.ajax({
      url: 'api/people',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (data) {
        PersonApiActions.receiveNewPerson(data);
        callback && callback(data.id);
      },
      error: function (data) {
        FlashActions.receiveErrors(data.responseJSON);
      }
    });
  },

  updatePerson: function (id, formData, callback) {
    $.ajax({
      url: 'api/people/' + id,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (data) {
        PersonApiActions.updatePerson(data);
        FlashActions.receiveErrors(["Changes saved"]);
        callback && callback();
      },
      error: function (data) {
        FlashActions.receiveErrors(data.responseJSON);
      }
    });
  },

  destroyPerson: function (id, callback) {
    $.ajax({
      url: 'api/people/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        PersonApiActions.removePerson(id);
        callback && callback();
      }
    });
  }
};
