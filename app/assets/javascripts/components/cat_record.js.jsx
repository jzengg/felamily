var CatRecord = React.createClass({

  render: function () {
    var cat = CatStore.findCat(this.props.params.id);

    return (
      <div>
        <CatSummary cat={cat} />
      </div>
    );
  }

});
