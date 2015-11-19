var RecordSummary = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;
    return(
      <ul className="summary-columns group">
        <li className="summary-left-column">
          <a className="profile-image-container" href={cat.profile_image_url}>
              <img className="profile-image" src={cat.profile_image_url_thumb} />
          </a>
          <li className="record-summary-name"> Name: {cat.name} </li>
          <li className="record-summary-sex"> Sex: {cat.sex} </li>
        </li>

        <li className="summary-middle-column">
          <li className="record-summary-location"> Location: {cat.location} </li>
        </li>

        <li className="summary-right-column">
          <li className="record-summary-available"> Status: {cat.available.toString()} </li>
        </li>
      </ul>
    );
  }

});
