var PersonSearch = React.createClass({
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
        <form className="person-search-bar" onSubmit={this.handleSubmit}>
          <label for="person-search"> Search
          <input id="person-search" onChange={this.handleChange} type="search" value={this.state.input} />
          </label>
        </form>


    );

  },



});
