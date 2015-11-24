
  var SessionHeader = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        expanded: false
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

    expand: function () {
      this.setState({expanded: !this.state.expanded});
    },

    render: function() {
      var button;
      var text = this.state.currentUser.username + " ▶";
      if (this.state.expanded) {
        text = this.state.currentUser.username + " ▼";
        button = <button className="user-logout" onClick={ this.logout }>Log Out</button>;
        }

      return (
        <div>
          <div className="user-button" onClick={this.expand}> {text} {button} </div>

        </div>
      );
    }

  });
