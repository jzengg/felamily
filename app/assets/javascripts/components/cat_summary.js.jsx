var CatSummary = React.createClass({


  render: function () {
    var cat = this.props.cat;
    return(
      <ul>
        <li> Name: {cat.name} </li>
        <li> Available: {cat.available.toString()} </li>
      </ul>
    );
  }

});
