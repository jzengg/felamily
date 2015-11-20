var CatFormMixin = {

  getInitialState: function () {
    return {name: "", available: "temp_unavailable", sex: "unknown", location: "cats", imageUrl: "", imageFile: undefined};
  },

  createFormData: function () {
    var name = this.linkState("name").value;
    var state = this.state;
    var formData = new FormData();
    formData.append("cat[name]", state.name);
    formData.append("cat[available]", state.available);
    formData.append("cat[sex]", state.sex);
    formData.append("cat[location]", state.location);
    return formData;
  },

  redirectToShow: function (id) {
    this.history.pushState(null, "cats/" + id);
  },

  updateField: function (field, e) {
    e.preventDefault();
    var change = {};
    change[field] = e.currentTarget.value;
    this.setState(change);
  },

  updateFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ imageUrl: reader.result, imageFile: file });
    };
    reader.readAsDataURL(file);
  },

  _sexOptions: function () {
    var sex = ["unknown", "male", "female"];
    return sex.map(function (sex, i) {
      return <option key={sex + i} value={sex}> {sex} </option>;
    });
  },

  _locationOptions: function () {
    var locations = ["cats", "kittens", "quarantine", "isolation", "foster"];
    return locations.map(function (location, i) {
      return <option key={location + i} value={location}> {location} </option>;
    });
  },

  _availabilityOptions: function () {
    var availables = ["temp_unavailable", "available", "unavailable"];
    return availables.map(function (status, i) {
      return <option key={status + i} value={status}> {status} </option>;
    });
  },


};
