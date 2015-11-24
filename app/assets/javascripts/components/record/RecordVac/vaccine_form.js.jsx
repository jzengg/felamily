var VaccineForm = React.createClass({
  getInitialState: function() {
    var date = new Date();
    var day = date.getDate();
    var month = (date.getMonth() + 1) % 12;
    var year = date.getFullYear();
    var initialDate = year + "-" + month + "-" + day;
    return {comments: "", given: initialDate};
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
    var vaccine = {comments: this.state.comments, given: this.state.given };

    VaccinesApiUtil.addVaccine(this.props.cat, vaccine);
  },

  handleChange: function (e) {
    this.setState({given: e.currentTarget.value});
  },

  render: function() {


    return (
      <form onSubmit={this.handleSubmit}>
      <label> Comments
        <textarea onChange={this.updateComments} value={this.state.comments}/>
        </label>
        <label> Given
          <input onChange={this.handleChange} type="date" format="DD/MM/YYYY" value={this.state.given} />,

        </label>
        <button> Add new vaccine </button>
      </form>
    );
  }
});
