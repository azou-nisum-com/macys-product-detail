
var app = app || {};
app.ProductDetails = Backbone.Model.extend({
  defaults: {
    color: '',
    colorChoices: [],
    quantity: 1,
    quantityMax: 5,
    size: 'Small',
    sizeChoices: [
      {value: '2S', text: 'Small'},
      {value: '3M', text: 'Medium'},
      {value: '4L', text: 'Large'}
    ]
  },
  validate: function(attrs){
    if (attrs.colorChoices.indexOf(attrs.color !== -1)) {
      return "Color is incorrect.";
    }

    if (!Number.isInteger(attrs.quantity)|| attrs.quantity < 1) {
      return "Quantity is incorrect and/or not an integer.";
    }

    if (attrs.sizeChoices.indexOf(attrs.size !== -1)) {
      return "Size is incorrect.";
    }
  }
});
