
var app = app || {};
app.Analytics = Backbone.Model.extend({
  defaults: {
    productInformation: 'Test1',
    shippingInformation: 'Test2'
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
