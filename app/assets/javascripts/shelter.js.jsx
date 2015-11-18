$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div className="app">
            <Header />
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={CatIndex}/>
        <Route path="cats/new" component={CatForm} />
        <Route path="cats/:id" component={CatRecord}>
          <Route path="/animal" component={RecordDetail} />
        </Route>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

});
