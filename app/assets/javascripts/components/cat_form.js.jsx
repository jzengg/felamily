var CatForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {name: "", available: "temp_unavailable", sex: "unknown", location: "cats", imageUrl: "", imageFile: undefined};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var file = this.state.imageFile;
    var formData = this.createFormData();

    if (typeof file != "undefined") {
      formData.append("cat[profile_image]", file);
    }

    ApiUtil.createCat(formData, this.handleSubmitSuccess);
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

  handleSubmitSuccess: function (id) {
    this.resetForm();
    this.redirectToShow(id);
  },

  redirectToShow: function (id) {
    this.history.pushState(null, "cats/" + id);
  },

  resetForm: function () {
    this.setState({name: "", available: "temp_unavailable", sex: "unknown", location: "cats", imageUrl: "", imageFile: undefined});
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

  render: function () {
    var updateField = this.updateField;
    var preview;
    if (typeof this.state.imageFile != "undefined") {
      preview = <img id="preview-image" className="preview-image" src={this.state.imageUrl} />
    }
    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new animal</heading>
          <label htmlFor="name"> Name </label>
            <input id="name" type="text" value={this.state.name} onChange={updateField.bind(null, "name")} />
          <br/>

          <label htmlFor="availability"> Availability </label>
            <select id="availability" onChange={updateField.bind(null, "available")} value={this.state.available}>
              {this._availabilityOptions()}
            </select>
          <br/>

          <label htmlFor="location"> Location </label>
            <select id="location" onChange={updateField.bind(null, "location")} value={this.state.location}>
              {this._locationOptions()}
            </select>
          <br/>

          <label htmlFor="sex"> Sex </label>
            <select id="sex" onChange={updateField.bind(null, "sex")} value={this.state.sex}>
              {this._sexOptions()}
            </select>
          <br/>
          <label htmlFor="profile-picture"> Upload a profile picture </label>
          <input id="profile-picture" type="file" onChange={this.updateFile} />

        {preview}
        <button> Add new cat </button>
      </form>
    );
  }
});
