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
        <form onSubmit={ this.submit }>

          <h1>Sign Up!</h1>

          <label>
            Username
            <input type="text" valueLink={this.linkState("username")} />
          </label>

          <label>
            Password
            <input type="password" valueLink={this.linkState("password")} />
          </label>

          <button>Join!</button>
        </form>
      );
    },

  });