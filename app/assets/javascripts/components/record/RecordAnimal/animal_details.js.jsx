var AnimalDetails = React.createClass({
  render: function() {
    return (
      <div className="">
        <EditForm cat={this.props.cat}/>
      </div>
    );
  }
});
