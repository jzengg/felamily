var Search = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {input: ""};
  },



  handleChange: function (e) {
    e.preventDefault();
    var searchString = e.currentTarget.value;
    this.setState({input: searchString});
    if (searchString.length > 0) {
      FilterActions.receiveParams(searchString);
    } else {
      FilterActions.resetParams();
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var filtered = CatStore.filtered(this.state.input);
    if (filtered.length == 1) {
      this.history.pushState(null, "cats/" + filtered[0].id);
    } else {
      this.history.pushState(null, "/");
    }
    this.setState({input: ""});
    // trying to search from show page requires you to submit form to get back to index
    // want to have it so you can submit and the index will update once it's been pushed in
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="search" value={this.state.input} placeholder="Search by name"/>
          </form>
      </div>


    );

  },



});
