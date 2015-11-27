var Link = ReactRouter.Link;
var AdoptionPersonSearchResults = React.createClass({

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
  },

  onChange: function () {
    var filters = FilterStore.all();
    this.setState({people: PersonStore.filtered(filters)});
  },

  handleClick: function (person) {
    this.props.updateParent("person", person);
    FilterActions.resetParams();
  },

  render: function () {
    var people = this.state.people || [];
    var results;

     if (people.length > 0) {
        results = people.map(function (person)
          {
            return(
              <tr key={person.id}>
                <td className="results-table-name" onClick={this.handleClick.bind(null, person)}> {person.fname} </td>
                <td> {person.lname}</td>
                <td> {person.zipcode} </td>
              </tr>
            );
          }.bind(this));
    }

    return (
        <table className="">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Zipcode</th>
          </tr>
          <tbody>
            {results}

          </tbody>
        </table>

    );
  }


});
