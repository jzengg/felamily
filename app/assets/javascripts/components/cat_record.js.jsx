var CatRecord = React.createClass({

  render: function () {
    var cat = CatStore.findCat(this.props.params.id);

    return (
      <div className="record-summary group">
        <CatSummary cat={cat} />
      </div>
    );
  }

});
