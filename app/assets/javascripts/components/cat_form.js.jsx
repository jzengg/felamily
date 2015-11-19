var CatForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {name: "", available: "temp_unavailable", sex: "unknown", location: "cats", imageUrl: "", imageFile: undefined};
  },

  componentDidMount: function () {
    CatStore.addNewCatListener(this.redirectToShow);
  },

  componentWillUnmount: function () {
    CatStore.removeNewCatListener(this.redirectToShow);
  },

  redirectToShow: function () {
    var catId = CatStore.all().pop().id;
    this.history.pushState(null, "cats/" + catId);
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var name = this.linkState("name").value;
    var available = this.state.available;
    var sex = this.state.sex;
    var location = this.state.location;
    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("cat[name]", name);
    formData.append("cat[available]", available);
    formData.append("cat[sex]", available);
    formData.append("cat[location]", available);
    if (typeof file != "undefined") {
      formData.append("cat[profile_image]", file);
    }
    ApiUtil.createCat(formData, this.resetForm);
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

  render: function () {
    var locations = ["cats", "kittens", "quarantine", "isolation", "foster"]
    var sex = ["unknown", "male", "female"]

    var sexOptions = sex.map(function (sex, i) {
      return <option key={sex + i} value={sex}> {sex} </option>
    })

    var locationOptions = locations.map(function (location, i) {
      return <option key={sex + i} value={location}> {location} </option>
    })

    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new animal </heading>
        <label> Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>

        <label> Availability
        <select onChange={this.updateAvailability} value={this.state.available}>
          <option value="temp_unavailable"> Temporarily Unavailable </option>
          <option value="unavailable"> Unavailable </option>
          <option value="available"> Available </option>
        </select>
        </label>

        <label> Location
        <select onChange={this.updateLocation} value={this.state.location}>
          {locationOptions}
        </select>
        </label>

        <label> Sex
        <select onChange={this.updateSex} value={this.state.sex}>
          {sexOptions}
        </select>
        </label>

        <input type="file" onChange={this.updateFile} />
        <img className="preview-image" src={this.state.imageUrl} />
        <button> Add new cat </button>
      </form>
    );
  }
});
