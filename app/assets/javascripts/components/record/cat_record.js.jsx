var CatRecord = React.createClass({
  getInitialState: function () {
    return {cat: undefined, creator: undefined};
  },
  componentDidMount: function () {
    // receive one cat listener may be extraneous if the event is changed to
    // a generic change event
    CatStore.addReceiveOneCatListener(this.receiveCat);
    UsersStore.addChangeHandler(this.receiveCreator);
    ApiUtil.fetchOneCat(this.props.params.id);
  },

  componentWillReceiveProps: function (newprops) {
    ApiUtil.fetchOneCat(newprops.params.id);
  },

  componentWillUnmount: function () {
    CatStore.removeReceiveOneCatListener(this.receiveCat);
    UsersStore.removeChangeHandler(this.receiveCreator);
  },

  receiveCat: function () {
    var cat = CatStore.findCat(this.props.params.id);
    UsersApiUtil.fetchUser(cat.creator_id);
    this.setState({cat: cat });
  },

  receiveCreator: function () {
    var creator = UsersStore.find(this.state.cat.creator_id);
    this.setState({creator: creator});
  },

  render: function () {
    var cat = this.state.cat;
    var details;
      if (!!this.state.cat && !!this.state.creator) {
        var childrenWithProps = React.Children.map(this.props.children, function(child)
          {

           return React.cloneElement(child, { cat: cat });
          });

        details =
        <div>
          <div className="record-summary group">
            <RecordSummary cat={cat} creator={this.state.creator} />
          </div>
          <RecordCategories cat={cat}/>
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
