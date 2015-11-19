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
        <IndexRoute component={ShelterSummary}/>
        <Route path="cats/new" component={CatForm} />
        <Route path="cats/index" component={CatIndex} />
        <Route path="cats/:id" component={CatRecord}>
          <IndexRoute component={RecordAnimal} />
          <Route path="animal" component={RecordAnimal} />
          <Route path="vaccine" component={RecordVac} />
        </Route>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

});
