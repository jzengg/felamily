var Errors = React.createClass({
  getInitialState: function() {
    return {errors: []};
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
    var errors = this.state.errors.map(function (error, i) {
      return <li className="errors" key={i}> {error} </li>;
    });
    return (
      <div>
        <ul>
        {errors}
        </ul>
      </div>
    );
  }
});
