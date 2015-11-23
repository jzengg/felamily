var RecordVac = React.createClass({
  render: function () {
    return(
      <div>
        record vac
        <VaccineResults cat={this.props.cat} />
      </div>
    );
  }
});
