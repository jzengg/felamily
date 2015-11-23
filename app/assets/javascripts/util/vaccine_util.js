var VaccinesApiUtil = {

  addVaccine: function (catId, vaccine) {
    $.ajax({
      url: "/api/cats/" + catId + "/vaccines",
      type: 'POST',
      dataType: 'json',
      data: {vaccine: vaccine},
      success: function () {
        console.log("added vaccine to db");
      }
    });
  },

  fetchVaccines: function (catId) {
    $.ajax({
      url: "api/cats/" +catId,
      type: "GET",

    });
  },

  updateVaccine: function () {

  },

  destroyVaccine: function () {

  }


};
