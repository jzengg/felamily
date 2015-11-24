var VaccineResults = React.createClass({

  getInitialState: function () {
    return {vaccines: this.props.cat.vaccines};
  },

  render: function() {
    var vaccines = this.props.cat.vaccines;
    var result = vaccines.map(function (vaccine) {
      return(
      <tr className="vaccine-result-row group" key={vaccine.id}>
        <td> {vaccine.category} </td>
        <td> {vaccine.comments} </td>
        <td> {vaccine.given} </td>
      </tr>
    );
  });
    return (
      <div>
      <table className="vaccine-results">
        <tr className="vaccine-result-categories">
          <th>Type</th>
          <th>Comments</th>
          <th>Given</th>
          <th>Required</th>
        </tr>
        {result}
      </table>
      <VaccineForm cat={this.props.cat}/>
      </div>
    );
  }
});
