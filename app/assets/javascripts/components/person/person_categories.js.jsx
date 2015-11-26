var Link = ReactRouter.Link;
var PersonCategories = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {active: 0};
    },

    handleClick: function (i) {
      this.setState({active: i});
    },

    render: function () {
      var person = this.props.person;
      var categories = ["person"];
      var links = categories.map(function (category, i) {
        var style = "";
        if (this.state.active == i) {
          style = "active-category";
        }
          return <li key={i}>  <Link className={style} onClick={this.handleClick.bind(null, i)} to={"/people/" + person.id + "/" + category}> {category} </Link> </li>;
      }.bind(this));
      return(
        <ul className="record-categories group">
          {links}
        </ul>
      );
    }
  });
