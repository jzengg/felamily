var VaccineActions = {
  updateCatVaccine: function (cat, vaccine) {
    AppDispatcher.dispatch({
      actionType: VaccineConstants.UPDATE_CAT_VACCINES,
      data: {cat: cat, vaccine: vaccine}
    });
  }

};
