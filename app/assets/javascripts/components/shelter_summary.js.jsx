var ShelterSummary = React.createClass({
  getInitialState: function () {
    return {cats: CatStore.all()};
  },

  componentDidMount: function () {
    CatStore.addChangeListener(this.updateCats);
    ApiUtil.fetchCats();
  },

  componentWillUnmount: function () {
    CatStore.removeChangeListener(this.updateCats);
  },

  updateCats: function () {
    this.setState({cats: CatStore.all()});
  },

  render: function () {
    var cats = this.state.cats;
    var recentCats;
    if (cats.length > 0) {
        recentCats = cats.slice(0, 5).map(function (cat) {
          return <li className="summary-items" key={cat.id}> {cat.name} </li>;
      });
    }


    return (
      <div className="shelter-summary">
        <ul>
          <li> <h3> There are {cats.length} cats in the database </h3> </li>
            <li> <h3> Recently modified cats </h3>
              {recentCats}
            </li>
        </ul>
      </div>
    );
  }
});
