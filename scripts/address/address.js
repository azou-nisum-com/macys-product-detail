
var app = app || {};
app.Address = Backbone.Model.extend({
  defaults: {
    street1: '39355 California Street',
    street2: '',
    city: 'Fremont',
    state: 'CA',
    zipCode: '94538',
    // street1: '',
    // street2: '',
    // city: '',
    // state: '',
    // zipCode: '',
  },
  validate: function(attrs){
    for (let prop in attrs) {
      if (prop !== 'street2' && !attrs[prop]) {
        return 'Address is incomplete.';
      }
    }

    if (attrs.zipCode) {
      if (parseInt(attrs.zipCode) === 'NaN' || attrs.zipCode.length !== 5) {
      return 'Zip code is incorrect.';
      }
    }
  }
});
