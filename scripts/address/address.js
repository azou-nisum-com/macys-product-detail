
var app = app || {};
app.Address = Backbone.Model.extend({
  defaults: {
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: undefined,
  },
  validate: function(attrs){
    attrs.forEach(attribute => {
      if (!attribute) {
        return 'Address is incomplete.'
      }
    });
  }
});
