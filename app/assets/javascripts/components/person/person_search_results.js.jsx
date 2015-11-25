var PersonSearchResults = React.createClass({
  getInitialState: function () {
    var filters = FilterStore.all();
    return ({cats: CatStore.filtered(filters)});
  },

  componentDidMount: function () {
    CatStore.addChangeListener(this.onChange);
    FilterStore.addChangeListener(this.onChange);
    ApiUtil.fetchCats();
  },

  componentWillUnmount: function () {
    CatStore.removeChangeListener(this.onChange);
    FilterStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    var filters = FilterStore.all();
    this.setState({people: PersonStore.filtered(filters)});
  },

  render: function() {
    return (
      <div className="person-search-results-container">
        <h5> Find a person</h5>
        <PersonSearch />
        person search results
      </div>
    );
  }
});
