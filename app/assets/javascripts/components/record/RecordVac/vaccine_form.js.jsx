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
    e.preventDefault();
    var vaccine = {comments: this.state.comments};

    VaccinesApiUtil.addVaccine(this.props.cat, vaccine);
  },

  handleChange: function (e) {
    debugger
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label> Comments
        <textarea onChange={this.updateComments} value={this.state.comments}/>
        </label>
        <label> Given
          <input onChange={this.handleChange} type="date" format="DD/MM/YYYY" date="4-12-2014" />,

        </label>
        <button> Add new vaccine </button>
      </form>
    );
  }
});
