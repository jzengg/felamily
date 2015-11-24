var AnimalNotes = React.createClass({
  getInitialState: function () {
    return {expanded: false, description: this.props.cat.description};
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
  },

  handleChange: function (e) {
    e.preventDefault();
    this.setState({description: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var id = this.props.cat.id;
    var formData = new FormData();
    formData.append("cat[description]", this.state.description);
    ApiUtil.updateCat(id, formData);
  },

  render: function() {
    var content = "";
    var text = "▶ Notes";
    var cat = this.props.cat;
    if (this.state.expanded) {
        content =
        <form className="details-description" onSubmit={this.handleSubmit}>
          <label> Description
          <div> <textarea onChange={this.handleChange} value={this.state.description} /> </div>
          </label>
          <button> Save changes </button>
        </form>;
        text = "▼ Notes";

    }

    return (
      <div className="details-description-container">
        <h3 className="record-subcategories" onClick={this.handleClick}> {text} </h3>
        {content}
      </div>
    );
  }
});
