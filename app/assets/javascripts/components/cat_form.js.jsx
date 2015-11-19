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
    var state = this.state
    debugger
    var formData = new FormData();
    formData.append("cat[name]", state.name);
    formData.append("cat[available]", state.available);
    formData.append("cat[sex]", state.sex);
    formData.append("cat[location]", state.location);
    return formData
  },

  handleSubmitSuccess: function (id) {
    this.resetForm()
    this.redirectToShow(id)
  },

  redirectToShow: function (id) {
    this.history.pushState(null, "cats/" + id);
  },

  resetForm: function () {
    this.setState({name: "", available: "temp_unavailable", sex: "unknown", location: "cats", imageUrl: "", imageFile: undefined})
  },

  updateAvailability: function (e) {
    e.preventDefault();
    this.setState({available: e.currentTarget.value});
  },

  updateLocation: function (e) {
    e.preventDefault();
    this.setState({location: e.currentTarget.value});

  },

  updateSex: function (e) {
    e.preventDefault();
    this.setState({sex: e.currentTarget.value});
  },

  updateFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ imageUrl: reader.result, imageFile: file });
    }

    reader.readAsDataURL(file);

  },

  sexOptions: function () {
    var sex = ["unknown", "male", "female"]
    return sex.map(function (sex, i) {
      return <option key={sex + i} value={sex}> {sex} </option>
    })
  },

  locationOptions: function () {
    var locations = ["cats", "kittens", "quarantine", "isolation", "foster"]
    return locations.map(function (location, i) {
      return <option key={location + i} value={location}> {location} </option>
    })
  },

  availabilityOptions: function () {
    var availables = ["temp_unavailable", "available", "unavailable"]
    return availables.map(function (status, i) {
      return <option key={status + i} value={status}> {status} </option>
    })
  },

  render: function () {

    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new animal </heading>
        <label> Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>

        <label> Availability
        <select onChange={this.updateAvailability} value={this.state.available}>
          {this.availabilityOptions()}
        </select>
        </label>

        <label> Location
        <select onChange={this.updateLocation} value={this.state.location}>
          {this.locationOptions()}
        </select>
        </label>

        <label> Sex
        <select onChange={this.updateSex} value={this.state.sex}>
          {this.sexOptions()}
        </select>
        </label>

        <input type="file" onChange={this.updateFile} />
        <img className="preview-image" src={this.state.imageUrl} />
        <button> Add new cat </button>
      </form>
    );
  }
});
