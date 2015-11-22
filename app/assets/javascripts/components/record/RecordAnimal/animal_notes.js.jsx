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
    var cat = this.props.cat;
    if (this.state.expanded) {
        content =
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} value={this.state.description} />
          <button> Save changes </button>
        </form>;
    }

    return (
      <div >
        <h3 onClick={this.handleClick}> AnimalNotes </h3>
        {content}
      </div>
    );
  }
});
