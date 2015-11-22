var Header = React.createClass({

  render: function () {
    return(
      <div className="header group">
        <QuickLinks />
        <Search />
        <SessionHeader />
      </div>
    );
  }

});
