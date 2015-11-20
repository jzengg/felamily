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
      this.history.pushState(null, "/cats/index");
    }

    this.setState({input: ""});
  },

  render: function () {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="search" value={this.state.input} placeholder="Search by name"/>
        </form>
      </div>


    );

  },



});
