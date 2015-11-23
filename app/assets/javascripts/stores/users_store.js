(function (root){

  var CHANGE_EVENT = 'change';

  var _users = [];
  var _addUser = function (user) {
    _users.push(user);
  };
  var UsersStore = root.UsersStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    find: function (userId) {
      return _users.find(function (user) {
        return user.id == userId;
      });
    },

    all: function () {
      return _users.slice();
    },

    dispatcherId: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case UserConstants.RECEIVE_USER:
            _addUser(payload.user);
            UsersStore.emit(CHANGE_EVENT);
          break;

      }

    }),


  });





})(this);
