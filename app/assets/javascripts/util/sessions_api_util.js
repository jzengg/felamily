var SessionsApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  logout: function ( callback ) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
        callback && callback();
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
      }
    });
  }


};
