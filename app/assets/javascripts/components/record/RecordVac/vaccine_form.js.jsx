var VaccineForm = React.createClass({
  getInitialState: function() {
    return {comments: ""};
  },
  componentWillMount: function() {

  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },

  updateComments: function (e) {
    this.setState({comments: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    var vaccine = {comments: this.state.comments};

    ApiUtil.addVaccine(this.props.cat, vaccine);
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label> Comments
        <textarea onChange={this.updateComments} value={this.state.comments}/>
        </label>
        <button> Add new vaccine </button>
      </form>
    );
  }
});
