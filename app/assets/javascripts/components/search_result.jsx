var Link = ReactRouter.Link;

var SearchResults = React.createClass({

  getInitialState: function () {
    var filters = FilterStore.all();
    return ({cats: CatStore.filtered(filters)});
  },

  componentDidMount: function () {
    CatStore.addChangeListener(this.onChange);
    FilterStore.addChangeListener(this.onChange);
    ApiUtil.fetchCats();
  },

  componentWillUnmount: function () {
    CatStore.removeChangeListener(this.onChange);
    FilterStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    var filters = FilterStore.all();
    this.setState({cats: CatStore.filtered(filters)});
  },

  render: function () {
    var cats = this.state.cats || [];
    var results;

    if (cats.length === 0) {
      results = <li> "No results found" </li>;
    } else {
        results = cats.map(function (cat)
          {
            return(
              <Link key={cat.id} to={"cats/"+cat.id}>
                <li> {cat.name} </li>
              </Link>
            );
          });
    }

    return (
        <ul className="search-results">
          {results}
        </ul>

    );
  }


});
