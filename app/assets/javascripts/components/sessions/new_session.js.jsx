
  var SessionForm = React.createClass({
    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    getInitialState: function () {
      return {username: "", password: ""};
    },

    submit: function (e) {
      var credentials = {
        username: this.linkState("username").value,
        password: this.linkState("password").value
      };

      SessionsApiUtil.login(credentials, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    handleGuest: function () {
      this.setState({username: "guest", password: "password"});
      this.signInGuest();
    },

    signInGuest: function () {
      SessionsApiUtil.login({username: "guest", password: "password"}, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    render: function() {

      return (
        <div>

        <form className="sign-up-form" onSubmit={ this.submit }>

          <h1>Shelter Manager </h1>

          <label htmlFor="login-username">
            Username
          </label>
            <div className="login-username">
              <input id="login-username" type="text" valueLink={this.linkState("username")}/>
            </div>

          <label htmlFor="login-password">
            Password
          </label>
            <div className="login-password">
              <input id="login-username" type="password" valueLink={this.linkState("password")} />
            </div>

          <button>Log In!</button>

          <h4> Dont have an account? <a href="#/signup">Sign Up</a> <a id="guest" href="" onClick={this.handleGuest}> Guest </a> </h4>

        </form>
        </div>
      );
    },

  });
