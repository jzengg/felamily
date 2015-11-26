var PersonForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {fname: "", lname: "", zipcode: "", email: "", imageUrl: "", imageFile: undefined};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var file = this.state.imageFile;
    var formData = this.createFormData();

    if (typeof file != "undefined") {
      formData.append("person[profile_image]", file);
    }

    PersonApiUtil.createPerson(formData, this.handleSubmitSuccess);
  },

  createFormData: function () {
    var fname = this.linkState("fname").value;
    var lname = this.linkState("lname").value;
    var state = this.state;
    var formData = new FormData();
    formData.append("person[fname]", state.fname);
    formData.append("person[lname]", state.lname);
    formData.append("person[zipcode]", state.zipcode);
    formData.append("person[email]", state.email);
    return formData;
  },

  handleSubmitSuccess: function (id) {
    this.resetForm();
    this.redirectToShow(id);
  },

  redirectToShow: function (id) {
    this.history.pushState(null, "people/" + id);
  },

  resetForm: function () {
    this.setState({fname: "", lname: "", zipcode: "", email: "", imageUrl: "", imageFile: undefined});
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

  render: function () {
    var preview;
    if (typeof this.state.imageFile != "undefined") {
      preview = <img id="preview-image" className="preview-image" src={this.state.imageUrl} />
    }
    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new person</heading>
          <label htmlFor="name"> First Name </label>
            <input id="name" type="text" valueLink={this.linkState("fname")}  />
          <br/>
          <label htmlFor="name"> Last Name </label>
            <input id="name" type="text" valueLink={this.linkState("lname")}  />
          <br/>
          <label htmlFor="zipcode"> Zipcode </label>
            <input id="zipcode" type="number" valueLink={this.linkState("zipcode")}  />
          <br/>
          <label htmlFor="email"> Email </label>
            <input id="email" type="text" valueLink={this.linkState("email")}  />
          <br/>

          <label htmlFor="profile-picture"> Upload a profile picture </label>
          <input id="profile-picture" type="file" onChange={this.updateFile} />

        {preview}
        <button> Add new person </button>
      </form>
    );
  }
});
