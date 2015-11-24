var VaccineActions = {
  addCatVaccine: function (cat, vaccine) {
    AppDispatcher.dispatch({
      actionType: VaccineConstants.ADD_CAT_VACCINES,
      data: {cat: cat, vaccine: vaccine}
    });
  },

  updateCatVaccine: function (cat, vaccine) {
    AppDispatcher.dispatch({
      actionType: VaccineConstants.UPDATE_CAT_VACCINES,
      cat: cat
    });
  }

};
