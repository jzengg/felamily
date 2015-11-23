var VaccinesApiUtil = {

  addVaccine: function (cat, vaccine) {
    $.ajax({
      url: "/api/cats/" + cat.id + "/vaccines",
      type: 'POST',
      dataType: 'json',
      data: {vaccine: vaccine},
      success: function (data) {
        console.log("added vaccine to db");
        VaccineActions.updateCatVaccine(cat, data);
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
