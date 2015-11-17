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
          return <li key={cat.id}> {cat.name} </li>;
        })}
        </ul>
      </div>

    );
  }


});
