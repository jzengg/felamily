
  var SessionHeader = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser()
      };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeHandler(this._onChange);
    },

    _onChange: function () {
      this.setState({currentUser: CurrentUserStore.currentUser()});
    },

    logout: function () {
      SessionsApiUtil.logout(function () {
        this.history.pushState(null, "/login");
      }.bind(this));
    },

    render: function() {
      if (CurrentUserStore.isLoggedIn()) {
        return (
          <div>
            Logged in as
            { this.state.currentUser.username }
            <button onClick={ this.logout }>LOG OUT</button>
          </div>
        );
      } else {
        return (
          <div>
            <a href="#/login">Login</a>
          </div>
        );
      }

    },

  });
