$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>FBA 2k16</h1></header>
            <Header />
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={CatIndex}/>
        <Route path="cats/:id" />

      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

});
