var EditForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    var cat = this.props.cat;
    
    return{id: cat.id, name: cat.name, available: cat.available, sex: cat.sex, location: cat.location, imageUrl: "", imageFile: undefined};
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var file = this.state.imageFile;
    var formData = this.createFormData();
    var id = this.state.id;
    if (typeof file != "undefined") {
      formData.append("cat[profile_image]", file);
    }
    ApiUtil.updateCat(id, formData);
  },

  createFormData: function () {
    var state = this.state;
    var formData = new FormData();
    formData.append("cat[name]", state.name);
    formData.append("cat[available]", state.available);
    formData.append("cat[sex]", state.sex);
    formData.append("cat[location]", state.location);
    return formData;
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

  handleDestroy: function () {
    ApiUtil.destroyCat(this.state.id, this.destroySuccess);
  },

  destroySuccess: function () {
    this.history.pushState(null, "/");
  },

  render: function () {
    var updateField = this.updateField;
    return(
      <div className="edit-cat-form-container">

      <form className="edit-cat-form" onSubmit={this.handleSubmit}>
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

        <img id="preview-image" className="preview-image" src={this.state.imageUrl} />
        <button className="save-changes"> Save changes </button>

      </form>
      <button onClick={this.handleDestroy}> Destroy cat! </button>
      </div>
    );
  }
});
