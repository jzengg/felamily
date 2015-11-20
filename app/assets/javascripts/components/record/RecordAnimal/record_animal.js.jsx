var RecordAnimal = React.createClass({
  render: function () {
    var cat = this.props.cat;
    return (
      <div>
        <AnimalContent cat={cat} />
      </div>
    );
  }
});
