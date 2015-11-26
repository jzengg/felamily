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
      results = <li> No results found </li>;
    } else {
        results = cats.map(function (cat)
          {
            return(
              <li className="search-result-result group" key={cat.id}><Link to={"cats/"+cat.id}>{cat.name}</Link>
              <h5 className="search-result-age-sex"> {cat.sex +" cat" + " aged " + cat.age} </h5>
              <h5> Location: {cat.location} </h5>
              <img className="search-result-picture" src={cat.profile_image_url_thumb} />
              </li>
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
