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
            <li className="record-summary-sex"> {cat.sex} </li>
          </div>
        </ul>

        <ul className="summary-middle-column">
          <li className="record-summary-location"> Location: {cat.location} </li>
        </ul>

        <ul className="summary-right-column">
          <li className="record-summary-available"> Status: {cat.available.toString()} </li>
          <li> Created By: {cat.creator_id}</li>
        </ul>
      </ul>
    );
  }

});
