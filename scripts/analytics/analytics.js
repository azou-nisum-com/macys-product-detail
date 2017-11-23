
var app = app || {};
app.Analytics = Backbone.Model.extend({
  defaults: {
    colors: '',
    quantity: '1',
    sizes: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
  },
  validate: function(attrs) {
    for (let prop in attrs) {
      if (prop !== 'address2' && !attrs[prop]) {
        return 'Address is incomplete.';
      }
    }

    if (attrs.zipcode) {
      if (isNaN(attrs.zipcode) || attrs.zipcode.length !== 5) {
        return 'Zip code is incorrect.';
      }
    }
  }
});
