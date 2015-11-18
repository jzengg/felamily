var Link = ReactRouter.Link;

var RecordCategories = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;

    return(
      <ul>
      RecordCategories
        <li> <Link to={"/cats/"+cat.id+"/animal"}> Animal </Link> </li>
        <li> </li>
        <li> </li>
        <li> </li>
      </ul>
    );
  }
});
