var Link = ReactRouter.Link;

var ShelterView = React.createClass({
  getInitialState: function() {
    return {cats: []};
  },
  componentDidMount: function() {
    CatStore.addChangeListener(this.receiveCats);
    ApiUtil.fetchCats();
  },
  receiveCats: function () {
    this.setState({cats: CatStore.all()});
  },
  componentWillUnmount: function() {
    CatStore.removeChangeListener(this.receiveCats);

  },
  _atLocation: function(location) {
    return this.state.cats.filter(function (cat) {
      return cat.location == location;
    });
  },

  _generateList: function (location) {
    return this._atLocation(location).map(function (cat) {
      return(
        <li className="shelterview-list-item" key={cat.id}>
          <Link to={"cats/" + cat.id}>
            <img className="shelterview-list-item-picture" src={cat.profile_image_url_thumb} />
          </Link>
            <h5> {cat.name} </h5>
        </li>
      );
    });
  },

  _generateAll: function () {
    var locations = ["kittens", "cats", "foster", "quarantine", "isolation"];
    return locations.map(function (location) {
      return(
        <div key={location}>
          <h3> {location} ({this._generateList(location).length}) </h3>
          <ul className="shelterview-list group">
            {this._generateList(location)}
          </ul>

        </div>
      );
    }.bind(this));
  },


  render: function() {
    return (
      <div className="shelterview">
        {this._generateAll()}





      </div>
    );
  }
});
