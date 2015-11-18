var CatRecord = React.createClass({
  getInitialState: function () {
    return {cat: undefined};
  },
  componentDidMount: function () {
    CatStore.addReceiveOneCatListener(this.receiveCat);
    ApiUtil.fetchOneCat(this.props.params.id);
  },

  componentWillReceiveProps: function (newprops) {
    ApiUtil.fetchOneCat(this.props.params.id);
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
        details =
        <div>
          <CatSummary cat={cat} />
          <RecordCategories cat={cat}/>
        </div>;
      }

    var childrenWithProps = React.Children.map(this.props.children,             function(child) {
             return React.cloneElement(child, { cat: cat });
           }
         );

    return (
      <div className="record-summary group">
        {details}
        {childrenWithProps}
      </div>
    );
  }

});
