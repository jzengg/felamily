var EditPersonForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    var person = this.props.person;

    return {id: person.id, fname: person.fname, lname: person.lname, zipcode: person.zipcode, email: person.email, imageUrl: "", imageFile: undefined};
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var file = this.state.imageFile;
    var formData = this.createFormData();
    var id = this.state.id;
    if (typeof file != "undefined") {
      formData.append("person[profile_image]", file);
    }
    PersonApiUtil.updatePerson(id, formData);
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

  updateFile: function (e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ imageUrl: reader.result, imageFile: file });
    };
    reader.readAsDataURL(file);
  },

  handleDestroy: function () {
    PersonApiUtil.destroyPerson(this.state.id, this.destroySuccess);
  },

  destroySuccess: function () {
    this.history.pushState(null, "/");
  },

  render: function () {
    var updateField = this.updateField;
    var preview;
    if (typeof this.state.imageFile != "undefined") {
      preview = <img id="preview-image" className="preview-image" src={this.state.imageUrl} />;
    }
    return(
      <div className="edit-cat-form-container">

      <form className="edit-cat-form" onSubmit={this.handleSubmit}>
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
      <button className="save-changes"> Save changes </button>


      </form>
      <button onClick={this.handleDestroy}> Delete record </button>
      </div>
    );
  }
});
