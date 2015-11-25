var Errors = React.createClass({
  getInitialState: function() {
    return {errors: ""};
  },
  componentDidMount: function() {
    FlashStore.addChangeHandler(this.handleErrors);
  },
  componentWillUnmount: function() {
    FlashStore.removeChangeHandler(this.handleErrors);
  },
  componentWillReceiveProps: function () {
    this.handleErrors();
  },
  handleErrors: function () {
    this.setState({errors: FlashStore.all()});
  },

  render: function() {
    return (
      <div className="errors">
        {this.state.errors}
      </div>
    );
  }
});
