var Search = React.createClass({

  getInitialState: function () {
    return {input: ""};
  },

  handleChange: function (e) {
    e.preventDefault();
    var name = e.currentTarget.value;
    this.setState({input: name});

    if (name.length > 0) {
      ApiActions.searchCats({name: name});
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
