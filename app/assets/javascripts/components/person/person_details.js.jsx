var PersonDetails = React.createClass({
  getInitialState: function () {
    return {expanded: true};
  },

  handleClick: function (e) {
    this.setState({expanded: !this.state.expanded});
    FlashActions.resetErrors();
  },

  render: function() {
    var text = "▶ Details";
    var content = "";
    var className = "";

    
    return (
      <div className="">
        <h5 className={className} onClick={this.handleClick}> {text} </h5>
        {content}
      </div>
    );
  }
});
