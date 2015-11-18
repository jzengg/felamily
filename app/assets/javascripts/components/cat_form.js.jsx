var CatForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
    return {name: "", available: "false"};
  },

  componentDidMount: function () {
    CatStore.addNewCatListener(this.redirectToShow);
  },

  componentWillUnmount: function () {
    CatStore.removeNewCatListener(this.redirectToShow);
  },

  redirectToShow: function () {
    var catId = CatStore.all().pop().id;
    this.history.pushState(null, "cats/" + catId);
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var cat = {
      name: this.linkState("name").value,
      available: this.state.available };
    ApiUtil.createCat(cat);
  },

  updateAvailability: function (e) {
    e.preventDefault();
    this.setState({available: e.currentTarget.value});
  },

  render: function () {
    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <heading> Add a new animal </heading>
        <label> Name
          <input type="text" valueLink={this.linkState("name")} />
        </label>

        <label> Availability

        <select onChange={this.updateAvailability} value={this.state.available}>
          <option value="true"> Available </option>
          <option value="false"> Unavailable </option>
        </select>
        </label>
        <button> Add new cat </button>
      </form>
    );
  }
});
