var VaccineForm = React.createClass({
  getInitialState: function() {
    var date = new Date();
    var d = date.getDate();
    var m = (date.getMonth() + 1);
    var y = date.getFullYear();
    var initialDate =  '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    var nextYear =  '' + (y+1) + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    return {category: "first_round", comments: "", given: initialDate, expires: nextYear, expanded: false};
  },

  updateComments: function (e) {
    this.setState({comments: e.currentTarget.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var state = this.state;
    var vaccine = {category: state.category, comments: state.comments, given: state.given, expires: state.expires};

    VaccinesApiUtil.addVaccine(this.props.cat, vaccine);
    this.toggleExpanded();
  },

  updateField: function (field, e) {
    var change = {};
    change[field] = e.currentTarget.value;
    this.setState(change);
  },

  _categoryOptions: function () {
    var categories = ["first_round", "second_round", "temporary", "parvovirus", "leukaemia", "booster"];
    return categories.map(function (category, i) {
      return <option key={category + i} value={category}> {category} </option>;
    });
  },

  toggleExpanded: function () {
    this.setState({expanded: !this.state.expanded});
  },

  render: function() {
    var form;
    if (this.state.expanded) {
      form =
        <div className="modal is-open">

        <div className="modal-form-vaccine">
          <h5 className="modal-header"> Add vaccination </h5>
          <span onClick={this.toggleExpanded} className="modal-close js-modal-close">&times;</span>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="vaccine-category"> Category </label>
            <select id="vaccine-category" onChange={this.updateField.bind(null, "category")} value={this.state.category}>
              {this._categoryOptions()}
            </select>
            <label htmlFor="vaccine-given"> Date Given </label>
              <input id="vaccine-given" onChange={this.updateField.bind(null, "given")} type="date" format="DD/MM/YYYY" value={this.state.given} />
            <label htmlFor="vaccine-expires"> Expiration Date </label>
              <input id="vaccine-given" onChange={this.updateField.bind(null, "expires")} type="date" format="DD/MM/YYYY" value={this.state.expires} />
            <label htmlFor="vaccine-comments"> Comments </label>
            <textarea id="vaccine-comments" onChange={this.updateField.bind(null, "comments")} value={this.state.comments}/>
            <button> Add </button>
          </form>
        <button onClick={this.toggleExpanded}> Cancel </button>
        </div>
        <div className="modal-screen js-modal-close"></div>
      </div>;
    }

    return (
      <div>
      <button className="toggle-vaccine-form" onClick={this.toggleExpanded}> New Vaccination </button>
      {form}
      </div>
    );
  }
});
