var VaccineResults = React.createClass({

  getInitialState: function () {
    return {vaccines: VaccineStore.all()};
  },

  componentDidMount: function () {
    VaccineApiUtil.fetchVaccines(this.props.cat.id);
    VaccineStore.addChangeHandler(this.updateVaccines);
  },

  updateVaccines: function () {
    this.setState({ vaccines: VaccineStore.all() });
  },

  render: function() {
    var cat = this.props.cat;
    var vaccines = cat.vaccines;
    var result = vaccines.map(function (vaccine) {
      return(
      <tr className="vaccine-result-row group" key={vaccine.id}>
        <td> {vaccine.category} </td>
        <td> {vaccine.comments} </td>
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
