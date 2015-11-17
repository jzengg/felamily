var Link = ReactRouter.Link;

var QuickLinks = React.createClass({

  render: function () {
    return(
        <ul>
          <Link to="cats/new"> Add a new cat </Link>
        </ul>
    );
  }

});
