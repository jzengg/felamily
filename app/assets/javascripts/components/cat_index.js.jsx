var Link = ReactRouter.Link;

var CatIndex = React.createClass({

  getInitialState: function () {
    return {cats: []};
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

    return (
      <div>
        <ul>
        {cats.map( function (cat) {
          return(
          <Link key={cat.id} to={"cats/"+cat.id}>
            <li > {cat.name} </li>
          </Link>
        );
        })}
        </ul>
      </div>

    );
  }


});
