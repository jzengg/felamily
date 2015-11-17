var CatIndex = React.createClass({

  getInitialState: function () {
    return {cats: []};
  },

  componentDidMount: function () {
    ApiUtil.fetchCats();
    CatStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function () {
    CatStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    this.setState({cats: CatStore.all()});

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
