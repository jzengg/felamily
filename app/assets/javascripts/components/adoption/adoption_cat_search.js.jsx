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
    var filtered = CatStore.filtered(this.state.input);
    if (filtered.length == 1) {
      this.props.updateParent("cat", filtered[0]);
    }
  },

  render: function () {
    return (
      <div className="modal is-open">

      <div className="modal-form">
        <h5 className="modal-header"> Find cat </h5>
        <span onClick={this.props.closeParent.bind(null,"cat")} className="modal-close js-modal-close">&times;</span>
        <form onSubmit={this.handleSubmit}>
          <input className="search-bar" onChange={this.handleChange} type="search" value={this.state.input} placeholder="Search for a cat"/>
        </form>

        <AdoptionCatSearchResults updateParent={this.props.updateParent} />
      </div>

        <div className="modal-screen js-modal-close">


        </div>


      </div>
    );

  },



});
