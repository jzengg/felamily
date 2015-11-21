var AnimalContent = React.createClass({
  // has all the subcategories in it.
  // will need logic to expand the component that's been clicked.

  render: function() {
    return (
      <ul>
      <AnimalDetails cat={this.props.cat}/>
      </ul>
    );
  }
});
