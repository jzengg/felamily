var CatSummary = React.createClass({


  render: function () {
    var cat = this.props.cat;

    return(
      <ul>
        <li className="record-summary-name"> Name: {cat.name} </li>
        <li className="record-summary-available"> Available: {cat.available.toString()} </li>
      </ul>
    );
  }

});
