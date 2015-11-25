$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return { currentUser: null, errors: ""};
    },

    componentWillMount: function () {
      CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
      SessionsApiUtil.fetchCurrentUser();
    },

    componentDidUnmount: function () {
      CurrentUserStore.removeChangeHandler(this._ensureLoggedIn);
    },

    _ensureLoggedIn: function () {
      if (!CurrentUserStore.isLoggedIn()) {
        this.history.pushState(null, "/login");
      }
      this.setState({currentUser: CurrentUserStore.currentUser()});
    },

    render: function(){
      var header;
      if (CurrentUserStore.isLoggedIn()){
        header = <Header />;
      }
      return (
          <div className="app">
            {header}
            {this.props.children}
            <Errors />
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={ShelterSummary}/>
        <Route path="signup" component={ UserForm} />
        <Route path="login" component={ SessionForm }/>
        <Route path="cats/new" component={CatForm} />bv
        <Route path="cats/index" component={SearchResults} />
        <Route path="cats/:id" component={CatRecord}>
          <IndexRoute component={AnimalContent} />
          <Route path="animal" component={AnimalContent} />
          <Route path="vaccine" component={VaccineResults}>
            <Route path="edit/:vaccine_id" component={EditVaccine} />
          </Route>
        </Route>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

});
