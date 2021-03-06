var EditVaccine = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      var vaccine = this._getVaccineFromProps(this.props);
      return {id: vaccine.id, category: vaccine.category, comments: vaccine.comments, given: vaccine.given, expires: vaccine.expires};
    },

    _getVaccineFromProps: function (props) {
      var vaccineId = parseInt(props.params.vaccine_id);
      return props.vaccines.find(function (vaccine) {
        return vaccine.id == vaccineId;
      });
    },

    componentWillReceiveProps: function (newProps) {
      var vaccine = this._getVaccineFromProps(newProps);
      this.setState({category: vaccine.category, comments: vaccine.comments, given: vaccine.given, expires: vaccine.expires});
    },

    handleSubmit: function (e) {
      e.preventDefault();
      var state = this.state;
      var vaccine = {category: state.category, comments: state.comments, given: state.given, expires: state.expires};

      VaccinesApiUtil.updateVaccine(this.props.cat, vaccine, this.state.id);
      this.history.pushState(null, "/cats/" + this.props.cat.id + "/vaccine");
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

    handleDestroy: function () {
      var state = this.state;
      var vaccine = {category: state.category, comments: state.comments, given: state.given, expires: state.expires};
      VaccinesApiUtil.destroyVaccine(this.props.cat, vaccine, this.state.id);
      this.history.pushState(null, "/cats/" + this.props.cat.id + "/vaccine");
    },

    closeForm: function () {
      this.history.pushState(null, "/cats/" + this.props.cat.id + "/vaccine");
    },

    render: function() {


      return (
        <div className="modal is-open">

        <div className="modal-form-vaccine">
          <h5 className="modal-header"> Edit vaccination </h5>
          <span onClick={this.closeForm} className="modal-close js-modal-close">&times;</span>
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
            <button> Save Changes </button>
          </form>
          <button onClick={this.handleDestroy}> Delete record </button>
          <button onClick={this.closeForm}> Cancel </button>
        </div>

        <div className="modal-screen js-modal-close"></div>
      </div>


      );
    }
  });
