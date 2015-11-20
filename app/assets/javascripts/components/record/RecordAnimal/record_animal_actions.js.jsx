var AnimalActions = React.createClass({
  render: function () {
    console.log(this.props.cat);
    return (
      <div>
        <ul>
          <li> <a>action1 </a> </li>
          <li> <a>action2 </a> </li>
        </ul>
      </div>
    );
  }
});
