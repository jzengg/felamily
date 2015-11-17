var Search = React.createClass({

  getInitialState: function () {
    return {input: ""};
  },



  handleChange: function (e) {
    e.preventDefault();
    var searchString = e.currentTarget.value;
    this.setState({input: searchString});

    if (searchString.length > 0) {
      FilterActions.receiveParams(searchString);
    }

  },

  render: function () {
    return (
      <div>
          <input onChange={this.handleChange} type="search" value={this.state.input} placeholder="Search by name"/>

      </div>


    );

  },



});
