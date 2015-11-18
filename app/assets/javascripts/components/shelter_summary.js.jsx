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
    var numCats = cats.length;
    var recentCats;
    if (numCats > 0) {
        recentCats = cats.slice(0, 5).map(function (cat) {
          return <li key={cat.id}> {cat.name} </li>;
      });
    }


    return (
      <div>
        <ul>
          <li>There are {numCats} cats in the database </li>
            <li> Recently modified cats
              {recentCats}
            </li>
        </ul>
      </div>
    );
  }
});
