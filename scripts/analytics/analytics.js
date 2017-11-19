
var app = app || {};
app.Analytics = Backbone.Model.extend({
  defaults: {
    color: '',
    quantity: '',
    size: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
  },
  validate: function(attrs) {
    for (let prop in attrs) {
      if (prop !== 'street2' && !attrs[prop]) {
        return 'Address is incomplete.';
      }
    }
  }
});
