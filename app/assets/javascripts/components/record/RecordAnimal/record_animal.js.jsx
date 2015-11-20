var RecordAnimal = React.createClass({
  render: function () {
    var cat = this.props.cat;
    return (
      <div>
        <AnimalActions cat={cat} />
        <AnimalContent cat={cat} />
      </div>
    );
  }
});
