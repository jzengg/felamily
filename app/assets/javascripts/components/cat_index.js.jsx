var Link = ReactRouter.Link;

var CatIndex = React.createClass({

  getInitialState: function () {
    var filters = FilterStore.all();
    return ({cats: CatStore.filtered(filters)});
  },

  componentDidMount: function () {
    ApiUtil.fetchCats();
    FilterStore.addChangeListener(this.onChange);

  },

  componentWillUnmount: function () {
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
      results = "Nothing found";
    } else {
        results = cats.map( function (cat) {
          return(
            <Link key={cat.id} to={"cats/"+cat.id}>
              <li > {cat.name} </li>
            </Link>
            );
          });
    }
    return (
      <div>
        <ul>
          {results}
        </ul>
      </div>

    );
  }


});
