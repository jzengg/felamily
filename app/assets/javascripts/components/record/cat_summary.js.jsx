var RecordSummary = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;
    var ownerLink;
    if (typeof cat.owner_id == "number") {
      ownerLink = <Link to={"people/" + cat.owner_id}> {" → " + cat.owner.fname + " " + cat.owner.lname} </Link>;
    }
    return(
      <ul className="summary-columns group">
        <ul className="summary-left-column">
          <a className="profile-image-container" href={cat.profile_image_url}>
              <img className="profile-image" src={cat.profile_image_url_thumb} />
          </a>
          <div id="name-sex">
            <li className="record-summary-name"> {cat.name} </li>
            <li className="record-summary-sex"> {cat.sex +" cat" + " aged " + cat.age} </li>
          </div>
        </ul>

        <ul className="summary-middle-column group">
          <li className="record-summary-location"> Location: <strong> {cat.location} {ownerLink}</strong> </li>
          <li className="record-summary-location"> Entered shelter: <strong> {cat.entered_shelter} </strong> </li>
          <li className="record-summary-location"> Left shelter: <strong> {cat.left_shelter} </strong> </li>
          <li className="record-summary-location"> Time on shelter: <strong> {cat.time_on_shelter} </strong> </li>
        </ul>

        <ul className="summary-right-column">
          <li> Added by <strong>{this.props.creator.username}</strong> at <strong> {cat.created_at} </strong> </li>
          <li> Last changed <strong> {cat.updated_at} </strong> </li>
          <li className="record-summary-available"> Status: {cat.available.toString()} </li>
        </ul>
      </ul>
    );
  }

});
