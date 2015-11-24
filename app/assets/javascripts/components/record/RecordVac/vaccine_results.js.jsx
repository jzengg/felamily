var Link = ReactRouter.Link;

var VaccineResults = React.createClass({
  mixins: [ReactRouter.History],



  showEdit: function (vaccineId) {
    this.history.pushState(null, "/cats/" + this.props.cat.id + "/vaccine/" + "edit/" + vaccineId);
  },

  _generateResultsTable: function () {
    var vaccines = this.props.cat.vaccines;
    return vaccines.map(function (vaccine) {
      return(
        <tr className="vaccine-result-row group" key={vaccine.id}>
          <td> <Link to={"/cats/" + this.props.cat.id + "/vaccine/" + "edit/" + vaccine.id}> {vaccine.category} </Link> </td>
          <td> {vaccine.comments} </td>
          <td> {vaccine.given} </td>
          <td> {vaccine.expires} </td>
        </tr>
      );
    }.bind(this));
  },

  render: function() {
    var results = this._generateResultsTable();
    var vaccines = this.props.cat.vaccines;

    var childrenWithProps;
    if (!!vaccines) {
      childrenWithProps = React.Children.map(this.props.children, function(child)
      {
       return React.cloneElement(child, { vaccines: vaccines, cat: this.props.cat});
     }.bind(this));
    }

    return (
      <div>
      <table className="vaccine-results">
        <tr className="vaccine-result-categories">
          <th>Type</th>
          <th>Comments</th>
          <th>Given</th>
          <th>Expires</th>
        </tr>
        {results}
      </table>
      <VaccineForm cat={this.props.cat}/>
        {childrenWithProps}
      </div>
    );
  }
});
