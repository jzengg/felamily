(function (root){

  var CHANGE_EVENT = 'change';

  var _currentUser = {};
  var _login = function (user) {
      _currentUser = user;
    };

  var CurrentUserStore = root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    dispatcherId: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case CurrentUserConstants.RECEIVE_CURRENT_USER:
            _currentUser = payload.currentUser;
            CurrentUserStore.emit(CHANGE_EVENT);
          break;

      }

    }),


  });





})(this);
  
