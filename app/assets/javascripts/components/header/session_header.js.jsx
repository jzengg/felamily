
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
      if (this.state.expanded) {
        button = <button onClick={ this.logout }>LOG OUT</button>;
        }

      return (
        <div>
          <div onClick={this.expand}> { this.state.currentUser.username } </div>
          {button}
        </div>
      );
    }

  });
