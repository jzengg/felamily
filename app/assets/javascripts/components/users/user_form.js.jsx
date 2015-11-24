var UserForm = React.createClass({
    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],
    getInitialState: function () {
      return {username: "", password: ""};
    },

    submit: function (e) {
      e.preventDefault();
      var username = this.linkState("username").value;
      var password = this.linkState("password").value;
      var user = {user: {username: username, password: password}};

      UsersApiUtil.createUser(user, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },

    login: function () {
    },

    render: function() {

      return (
        <div>
          <form className="sign-up-form" onSubmit={ this.submit }>


            <h1>Sign Up!</h1>

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
                  <input id="login-username" type="password" valueLink={this.linkState("password")}/>
                </div>

            <button>Join!</button>
          <h4> Already have an account? <a href="#/login">Login</a> </h4>
          </form>

        </div>
      );
    },

  });
