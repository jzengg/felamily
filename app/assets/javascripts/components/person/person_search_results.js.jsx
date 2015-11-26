var PersonSearchResults = React.createClass({
  getInitialState: function () {
    var filters = FilterStore.all();
    return ({people: PersonStore.filtered(filters)});
  },

  componentDidMount: function () {
    PersonStore.addChangeListener(this.onChange);
    FilterStore.addChangeListener(this.onChange);
    PersonApiUtil.fetchPeople();
  },

  componentWillUnmount: function () {
    PersonStore.removeChangeListener(this.onChange);
    FilterStore.removeChangeListener(this.onChange);
    FilterActions.resetParams();
  },

  onChange: function () {
    var filters = FilterStore.all();
    this.setState({people: PersonStore.filtered(filters)});
  },

  render: function() {
    var people = this.state.people || [];
    var results;
    if (people.length === 0) {
      results = <li> No results found </li>;
      }  else {
        results = this.state.people.map(function (person) {
          return <li key={person.id}> <Link to={"people/"+person.id}> {person.fname + " " + person.lname} </Link> </li>;
        });

      }

    return (
      <div className="person-search-results-container">
        <h5> Find a person</h5>
        <PersonSearch />
        <ul>
          {results}
        </ul>
      </div>
    );
  }
});
