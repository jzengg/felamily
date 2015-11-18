var Link = ReactRouter.Link;

var QuickLinks = React.createClass({

  render: function () {
    return(
        <ul className="quicklinks-bar">
          <Link to="cats/new"> Add a new cat </Link>
        </ul>
    );
  }

});
