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

  _cats: function () {
    return this._atLocation("cats").map(function (cat) {
      return <li key={cat.id}>{cat.name} </li>;
    });
  },
  _kittens: function () {
    return this._atLocation("kittens").map(function (cat) {
      return <li key={cat.id}> {cat.name} </li>;
    });
  },
  _foster: function () {
    return this._atLocation("foster").map(function (cat) {
      return <li key={cat.id}>{cat.name} </li>;
    });
  },
  _isolation: function () {
    return this._atLocation("isolation").map(function (cat) {
      return <li key={cat.id}>{cat.name} </li>;
    });  },
  _quarantine: function () {
    return this._atLocation("quarantine").map(function (cat) {
      return <li key={cat.id}>{cat.name} </li>;
    });  },

  render: function() {
    return (
      <ul>
        <li>
          <h2> Shelter View</h2>
        </li>

        <li>
          <h3>Kittens ({this._kittens().length})</h3>
          <ul>
            {this._kittens()}
          </ul>
        </li>
        <li>
          <h3>Cats ({this._cats().length})</h3>
          <ul>
            {this._cats()}
          </ul>
        </li>
        <li>
          <h3>Foster ({this._foster().length})</h3>
          <ul>
            {this._foster()}
          </ul>
        </li>
        <li>
          <h3>Quarantine ({this._quarantine().length})</h3>
          <ul>
            {this._quarantine()}
          </ul>
        </li>
        <li>
          <h3>Isolation ({this._isolation().length})</h3>
          <ul>
            {this._isolation()}
          </ul>
        </li>



      </ul>
    );
  }
});
