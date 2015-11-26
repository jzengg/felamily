var AdoptionCatSearch = React.createClass({
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
  },

  render: function () {
    return (
      <div>

        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="search" value={this.state.input} placeholder="Search for a cat"/>
        </form>

        <AdoptionCatSearchResults updateParent={this.props.updateParent} />



      </div>
    );

  },



});
