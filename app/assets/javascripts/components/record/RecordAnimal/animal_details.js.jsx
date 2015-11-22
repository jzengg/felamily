var AnimalDetails = React.createClass({
  getInitialState: function () {
    return {expanded: true};
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
  },

  render: function() {
    var content = "";
    if (this.state.expanded) {
        content = <EditForm cat={this.props.cat}/>;
    }
    return (
      <div className="">
        <h3 onClick={this.handleClick}> Details </h3>
        {content}
      </div>
    );
  }
});
