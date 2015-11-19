var CatSummary = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var cat = this.props.cat;
    return(
      <ul>
        <li>
          <a href={cat.profile_image_url}>
            <img src={cat.profile_image_url_thumb} />
          </a>
        </li>
        <li className="record-summary-name"> Name: {cat.name} </li>
        <li className="record-summary-available"> Available: {cat.available.toString()} </li>
      </ul>
    );
  }

});
