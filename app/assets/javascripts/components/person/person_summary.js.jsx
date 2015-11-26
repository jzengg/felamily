var Link = ReactRouter.Link;
var PersonSummary = React.createClass({
  mixins: [ReactRouter.History],

  render: function () {
    var person = this.props.person;
    var petLink;
    if (typeof person.cats == "object" && person.cats.length > 0) {
      petLink =
        <ul>
          {
            person.cats.map(function (cat) {
              return <li key={cat.id}> <Link to={"cats/" + cat.id}> {cat.name} </Link> </li>;
            })
          }
        </ul>;
    }
    return(
      <ul className="summary-columns group">
        <ul className="summary-left-column">
          <a className="profile-image-container" href={person.profile_image_url}>
              <img className="profile-image" src={person.profile_image_url_thumb} />
          </a>
          <div id="name-sex">
            <li className="record-summary-name"> {person.fname + " " + person.lname} </li>
          </div>
        </ul>

        <ul className="summary-middle-column">
          <li className="record-summary-location"> Zipcode: <strong> {person.zipcode} </strong> </li>
        </ul>

        <ul className="summary-right-column">
          <li> Added by <strong>{this.props.creator.username}</strong> at <strong> {person.created_at} </strong> </li>
          <li> Last changed <strong> {person.updated_at} </strong> </li>
          <li className="record-summary-available"> Pets: {petLink} </li>

        </ul>
      </ul>
    );
  }

});
