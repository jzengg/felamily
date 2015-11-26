var PersonContent = React.createClass({

  render: function() {
    return (
      <div className="animal-content">
      <PersonDetails person={this.props.person} />
      </div>
    );
  }
});
