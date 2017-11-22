
var app = app || {};
app.Address = Backbone.Model.extend({
  defaults: {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
  },
  validate: function(attrs){
    for (let prop in attrs) {
      if (prop !== 'street2' && !attrs[prop]) {
        return 'Address is incomplete.';
      }
    }

    if (attrs.zipCode) {
      if (isNaN(attrs.zipCode) || attrs.zipCode.length !== 5) {
      return 'Zip code is incorrect.';
      }
    }
  }
});
