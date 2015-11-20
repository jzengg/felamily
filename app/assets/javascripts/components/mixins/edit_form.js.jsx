var EditForm = React.createClass({
  mixins: [CatFormMixin, React.addons.LinkedStateMixin],
  handleSubmitSuccess: function () {
    this.forceUpdate();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var file = this.state.imageFile;
    var formData = this.createFormData();

    if (typeof file != "undefined") {
      formData.append("cat[profile_image]", file);
    }

    ApiUtil.updateCat(formData, this.handleSubmitSuccess);
  },

  render: function () {
    var updateField = this.updateField;
    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
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
        <button> Save changes </button>
      </form>
    );
  }
});
