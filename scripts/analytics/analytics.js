
var app = app || {};
app.Analytics = Backbone.Model.extend({
  defaults: {
    colors: '',
    quantity: '',
    sizes: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
  },
  validate: function(attrs) {
    if (!attrs.colors || !attrs.sizes) {
        return 'Product details are incomplete.';
    }

    if (!attrs.address1 || !attrs.city || !attrs.state || !attrs.zipcode) {
        return 'Address is incomplete.';
    }

    if (attrs.zipcode) {
      if (isNaN(attrs.zipcode) || attrs.zipcode.length !== 5) {
        return 'Zip code is incorrect.';
      }
    }
  }
});
