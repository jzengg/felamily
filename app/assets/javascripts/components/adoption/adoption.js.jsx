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

  isValidLocation: function () {
    var invalidLocations = ["cats", "kittens", "foster"];
    return (invalidLocations.indexOf(this.state.cat.location) != -1);

  },

  isAvailable: function () {
    return this.state.cat.available == "available";
  },

  handleAdopt: function () {
    if (typeof this.state.person.id == "undefined" || typeof this.state.cat.id == "undefined") {
        FlashActions.receiveErrors("Please select both a person and a cat");
    }
    else if (!this.isValidLocation() || !this.isAvailable) {
      FlashActions.receiveErrors("Cannot adopt a cat that is in isolation, quarantine, or already adopted");
    } else {
      var formData = new FormData();
      formData.append("cat[owner_id]", this.state.person.id);
      formData.append("cat[available]", "unavailable");
      formData.append("cat[location]", "adopted");
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

        <h5 className="heading"> Adopt an animal</h5>
        <div className="adoption-form group">
          <ul className="adoption-input-animal group">
            <li className="adoption-label"> Animal </li>
            <li className="adoption-selected-field"> {this.state.cat.name} </li>
            <li>  <button onClick={this.expandCat}> 🔎 </button></li>
            <li> <button onClick={this.updateParent.bind(null, "cat", {})}> ♻  </button></li>
          {catSearch}
          </ul>

          <ul className="adoption-input-person group">
            <li className="adoption-label"> New owner </li>
            <li className="adoption-selected-field"> {this._personName()} </li>
            <li> <button onClick={this.expandPerson}> 🔎 </button></li>
            <li> <button onClick={this.updateParent.bind(null, "person", {})}> ♻  </button></li>
            {personSearch}

          </ul>

          <button className="adoption-button" onClick={this.handleAdopt}> Adopt </button>
        </div>
      </div>
    );
  }
});
