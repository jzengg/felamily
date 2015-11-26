var Adoption = React.createClass({

  getInitialState: function () {
    return {cat: {}, person: {}, catExpanded: false, personExpanded: false};
  },

  updateParent: function (param, value) {
    var change = {};
    change[param] = value;
    change[param+"Expanded"] = false;
    this.setState(change);
  },

  expandCat: function () {
    this.setState({catExpanded: !this.state.catExpanded});
  },

  expandPerson: function () {
    this.setState({personExpanded: !this.state.personExpanded});
  },

  _personName: function () {
    if (typeof this.state.person.fname == "undefined") {
      return "";
    } else {
      return this.state.person.fname + " " + this.state.person.lname;
    }
  },

  render: function() {
    var catSearch;
    var personSearch;
    if (this.state.catExpanded) {
      catSearch = <AdoptionCatSearch updateParent={this.updateParent}/>;
    }
    if (this.state.personExpanded) {
      personSearch = <AdoptionPersonSearch updateParent={this.updateParent}/>;
    }

    return (
      <div>
        <h5> Adopt an animal</h5>
          <ul className="selected-cat">
            <li> {this.state.cat.name} </li>
            <li> <button onClick={this.expandCat}> 🔎 </button></li>
            <li> <button onClick={this.updateParent.bind(null, "cat", {})}> ♻  </button></li>
            {catSearch}
          </ul>
          <ul className="selected-person">
            <li> {this._personName()} </li>
            <li> <button onClick={this.expandPerson}> 🔎 </button></li>
            <li> <button onClick={this.updateParent.bind(null, "person", {})}> ♻  </button></li>
            {personSearch}

          </ul>
      </div>
    );
  }
});
