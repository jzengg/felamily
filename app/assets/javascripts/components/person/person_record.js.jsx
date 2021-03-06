var PersonRecord = React.createClass({
    getInitialState: function () {
      return {person: undefined, creator: undefined};
    },
    componentDidMount: function () {
      PersonStore.addReceiveOnePersonListener(this.receivePerson);
      UsersStore.addChangeHandler(this.receiveCreator);
      PersonApiUtil.fetchOnePerson(this.props.params.id);
    },

    componentWillReceiveProps: function (newprops) {
      PersonApiUtil.fetchOnePerson(newprops.params.id);
    },

    componentWillUnmount: function () {
      PersonStore.removeReceiveOnePersonListener(this.receivePerson);
      UsersStore.removeChangeHandler(this.receiveCreator);
    },

    receivePerson: function () {
      var person = PersonStore.findPerson(this.props.params.id);
      UsersApiUtil.fetchUser(person.creator_id);
      this.setState({person: person });
    },

    receiveCreator: function () {
      var creator = UsersStore.find(this.state.person.creator_id);
      this.setState({creator: creator});
    },

    render: function () {
      var person = this.state.person;
      var details;
        if (!!this.state.person && !!this.state.creator) {
          var childrenWithProps = React.Children.map(this.props.children, function(child)
            {

             return React.cloneElement(child, { person: person });
            });

          details =
          <div>
            <div className="record-summary group">
              <PersonSummary person={person} creator={this.state.creator} />
            </div>
            <PersonCategories person={person}/>
            {childrenWithProps}
        </div>;

        }

      return (
        <div className="record">
          {details}
        </div>
      );
    }

  });
