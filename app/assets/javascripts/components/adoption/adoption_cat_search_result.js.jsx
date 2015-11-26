  var Link = ReactRouter.Link;
  var AdoptionCatSearchResults = React.createClass({

    getInitialState: function () {
      var filters = FilterStore.all();
      return ({cats: CatStore.filtered(filters)});
    },

    componentDidMount: function () {
      CatStore.addChangeListener(this.onChange);
      FilterStore.addChangeListener(this.onChange);
      ApiUtil.fetchCats();
    },

    componentWillUnmount: function () {
      CatStore.removeChangeListener(this.onChange);
      FilterStore.removeChangeListener(this.onChange);
    },

    onChange: function () {
      var filters = FilterStore.all();
      this.setState({cats: CatStore.filtered(filters)});
    },

    render: function () {
      var cats = this.state.cats || [];
      var results;

       if (cats.length > 0) {
          results = cats.map(function (cat)
            {
              return(
                <tr>
                  <td onClick={this.props.updateParent.bind(null, "cat", cat)}> {cat.name} </td>
                  <td> {cat.location}</td>
                  <td> {cat.sex} </td>
                </tr>
              );
            }.bind(this));
      }

      return (
          <table className="search-results">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Sex</th>
            </tr>
            <tbody>
              {results}

            </tbody>
          </table>

      );
    }


  });
