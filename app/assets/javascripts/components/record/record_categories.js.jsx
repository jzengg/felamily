var Link = ReactRouter.Link;

var RecordCategories = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {active: 0};
  },

  handleClick: function (i) {
    this.setState({active: i});
  },

  render: function () {
    var cat = this.props.cat;
    var extra = ["medication", "test"];
    var categories = ["animal", "vaccine"];
    var links = categories.map(function (category, i) {
      var style = "";
      if (this.state.active == i) {
        style = "active-category";
      }
        return <li key={i}>  <Link className={style} onClick={this.handleClick.bind(null, i)} to={"/cats/" + cat.id + "/" + category}> {category} </Link> </li>;
    }.bind(this));
    return(
      <ul className="record-categories group">
        {links}
      </ul>
    );
  }
});
