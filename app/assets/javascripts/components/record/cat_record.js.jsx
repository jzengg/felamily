var CatRecord = React.createClass({
  getInitialState: function () {
    return {cat: undefined};
  },
  componentDidMount: function () {
    CatStore.addReceiveOneCatListener(this.receiveCat);
    ApiUtil.fetchOneCat(this.props.params.id);
  },

  componentWillReceiveProps: function (newprops) {
      ApiUtil.fetchOneCat(newprops.params.id);
  },

  componentWillUnmount: function () {
    CatStore.removeReceiveOneCatListener(this.receiveCat);
  },

  receiveCat: function () {
    this.setState({cat: CatStore.findCat(this.props.params.id)});
  },

  render: function () {
    var cat = this.state.cat;

    var details;

      if (!!this.state.cat) {
        var childrenWithProps = React.Children.map(this.props.children, function(child)
          {

           return React.cloneElement(child, { cat: cat });
          });

        details =
        <div>
          <div className="record-summary group">
            <RecordSummary cat={cat} />
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
