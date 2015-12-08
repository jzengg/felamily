var AutoFocusFieldMixin = {
  componentDidMount: function () {
    this.refs.nameInput.getDOMNode().focus();
  },
};
