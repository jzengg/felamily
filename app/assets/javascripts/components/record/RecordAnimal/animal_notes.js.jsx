var AnimalNotes = React.createClass({
  getInitialState: function () {
    return {expanded: false};
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
  },



  render: function() {
    var content = "";
    if (this.state.expanded) {
        content = "animal notes";
    }

    return (
      <div >
        <h3 onClick={this.handleClick}> AnimalNotes </h3>
        {content}
      </div>
    );
  }
});
