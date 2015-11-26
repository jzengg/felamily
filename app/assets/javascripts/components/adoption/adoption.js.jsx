var Adoption = React.createClass({
  mixins: [ReactRouter.History],
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

  handleAdopt: function () {
    if (typeof this.state.person == "undefined" || typeof this.state.cat == "undefined") {
        FlashActions.receiveErrors("Please select both a person and a cat");
    } else {
      var formData = new FormData();
      formData.append("cat[owner_id]", this.state.person.id);
      formData.append("cat[location]", "foster");
      ApiUtil.updateCat(this.state.cat.id, formData, this.handleSuccess);
    }
  },

  handleSuccess: function () {
    this.history.pushState(null, "cats/" + this.state.cat.id);
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

          <button onClick={this.handleAdopt}> Adopt </button>
      </div>
    );
  }
});
