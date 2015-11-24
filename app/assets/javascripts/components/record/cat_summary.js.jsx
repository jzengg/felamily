var RecordSummary = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;
    return(
      <ul className="summary-columns group">
        <ul className="summary-left-column">
          <a className="profile-image-container" href={cat.profile_image_url}>
              <img className="profile-image" src={cat.profile_image_url_thumb} />
          </a>
          <div id="name-sex">
            <li className="record-summary-name"> {cat.name} </li>
            <li className="record-summary-sex"> {cat.sex + " cat"} </li>
          </div>
        </ul>

        <ul className="summary-middle-column">
          <li className="record-summary-location"> Location: <strong> {cat.location} </strong> </li>
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
