var GeneralForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

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

  render: function () {
    var updateField = this.updateField;
    return(
      <form className="cat-form" onSubmit={this.props.handleSubmit}>
        <heading> Add a new animal </heading>
        <label> Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>

        <label> Availability
          <select onChange={updateField.bind(null, "available")} value={this.state.available}>
            {this._availabilityOptions()}
          </select>
        </label>

        <label> Location
          <select onChange={updateField.bind(null, "location")} value={this.state.location}>
            {this._locationOptions()}
          </select>
        </label>

        <label> Sex
          <select onChange={updateField.bind(null, "sex")} value={this.state.sex}>
            {this._sexOptions()}
          </select>
        </label>

        <input type="file" onChange={this.updateFile} />
        <img className="preview-image" src={this.state.imageUrl} />
        <button> Add new cat </button>
      </form>
    );
  }

});
