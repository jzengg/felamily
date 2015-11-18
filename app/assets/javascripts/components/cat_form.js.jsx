var CatForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {name: "", available: "false", imageUrl: "", imageFile: null};
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
    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("cat[name]", name);
    formData.append("cat[available]", available);
    formData.append("cat[profile_image]", file);

    ApiUtil.createCat(formData, this.resetForm);
  },

  resetForm: function () {
    this.setState({name: "", available: "false", imageUrl: "", imageFile: null})
  },

  updateAvailability: function (e) {
    e.preventDefault();
    this.setState({available: e.currentTarget.value});
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
    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new animal </heading>
        <label> Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>

        <label> Availability

        <select onChange={this.updateAvailability} value={this.state.available}>
          <option value="true"> Available </option>
          <option value="false"> Unavailable </option>
        </select>
        </label>

        <input type="file" onChange={this.updateFile} />
        <img className="preview-image" src={this.state.imageUrl} />
        <button> Add new cat </button>
      </form>
    );
  }
});
