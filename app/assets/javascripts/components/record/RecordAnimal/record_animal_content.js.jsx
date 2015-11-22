var AnimalContent = React.createClass({
  // has all the subcategories in it.
  // will need logic to expand the component that's been clicked.


  render: function() {
    return (
      <div>
        <AnimalDetails cat={this.props.cat} />
        <AnimalNotes cat={this.props.cat} />
      </div>
    );
  }
});
