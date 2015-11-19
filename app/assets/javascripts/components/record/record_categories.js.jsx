var Link = ReactRouter.Link;

var RecordCategories = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;
    var extra = ["medication", "test"];
    var categories = ["animal", "vaccine"];
    var links = categories.map(function (category, i) {
      return <li key={i}>  <Link to={"/cats/" + cat.id + "/" + category}> {category} </Link> </li>;
    });
    return(
      <ul className="record-categories group">
        {links}
      </ul>
    );
  }
});
