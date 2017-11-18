
var app = app || {};
app.Address = Backbone.Model.extend({
  defaults: {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: null,
  },
  validate: function(attrs){
    for (var prop in attrs) {
      if (!attrs[prop]) {
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
