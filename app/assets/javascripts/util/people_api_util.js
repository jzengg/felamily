var PeopleApiUtil = {
  fetchPeople: function () {
    $.ajax({
      url: 'api/people',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        debugger
        PersonApiActions.receivePeople(data);
      }
    });
  },

  // fetchOneCat: function (catId) {
  //   $.ajax({
  //     url: 'api/people/'+catId,
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (data) {
  //       ApiActions.receiveOneCat(data);
  //     }
  //   });
  // },
  //
  // createCat: function (formData, callback) {
  //   $.ajax({
  //     url: 'api/people',
  //     type: 'POST',
  //     processData: false,
  //     contentType: false,
  //     dataType: 'json',
  //     data: formData,
  //     success: function (data) {
  //       ApiActions.receiveNewCat(data);
  //       callback && callback(data.id);
  //     },
  //     error: function (data) {
  //       FlashActions.receiveErrors(data.responseJSON);
  //     }
  //   });
  // },
  //
  // updateCat: function (id, formData, callback) {
  //   $.ajax({
  //     url: 'api/people/' + id,
  //     type: 'PATCH',
  //     processData: false,
  //     contentType: false,
  //     dataType: 'json',
  //     data: formData,
  //     success: function (data) {
  //       ApiActions.updateCat(data);
  //       FlashActions.receiveErrors(["Changes saved"]);
  //       callback && callback();
  //     },
  //     error: function (data) {
  //       FlashActions.receiveErrors(data.responseJSON);
  //     }
  //   });
  // },
  //
  // destroyCat: function (id, callback) {
  //   $.ajax({
  //     url: 'api/people/' + id,
  //     type: 'DELETE',
  //     dataType: 'json',
  //     success: function () {
  //       ApiActions.removeCat(id);
  //       callback && callback();
  //     }
  //   });
  // }
};
