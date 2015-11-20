var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
      );
  }
});
