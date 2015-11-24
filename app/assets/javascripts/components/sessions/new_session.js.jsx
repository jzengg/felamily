
  var SessionForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();

      var credentials = $(e.currentTarget).serializeJSON();
      SessionsApiUtil.login(credentials, function () {
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
              <input id="login-username" type="text" name="username" autofocus/>
            </div>

          <label htmlFor="login-password">
            Password
          </label>
            <div className="login-password">
              <input id="login-username" type="password" name="password" />
            </div>

          <button>Log In!</button>

          <h4> Don't have an account? <a href="#/signup">Sign Up</a> </h4>

        </form>
        </div>
      );
    },

  });
