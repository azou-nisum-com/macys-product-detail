
var app = app || {};
app.Analytics = Backbone.Model.extend({
  defaults: {
    productInformation: '',
    shippingInformation: ''
  },
  validate: function(attrs){
    if (!attrs.productInformation) {
      return "Product information missing.";
    }

    if (!attrs.shippingInformation) {
      return "Shipping information missing.";
    }
  }
});
