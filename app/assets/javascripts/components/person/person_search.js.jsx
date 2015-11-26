var PersonSearch = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {input: ""};
  },

  handleChange: function (e) {
    e.preventDefault();
    debugger
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
      this.history.pushState(null, "people/" + filtered[0].id);
    } else {
      this.history.pushState(null, "/people/index");
    }

    this.setState({input: ""});
  },

  render: function () {
  
    return (
        <form className="person-search-bar" onSubmit={this.handleSubmit}>
          <label htmlFor="person-search"> Search
          <input id="person-search" onChange={this.handleChange} type="search" value={this.state.input} />
          </label>
        </form>


    );

  },



});
