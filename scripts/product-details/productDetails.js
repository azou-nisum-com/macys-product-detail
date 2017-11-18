
var app = app || {};
app.ProductDetails = Backbone.Model.extend({
  defaults: {
    // color: '',
    colorChoices: [],
    // quantity: 1,
    quantityMax: 5,
    // size: '2S',
    sizeChoices: [
      {value: '2S', text: 'Small'},
      {value: '3M', text: 'Medium'},
      {value: '4L', text: 'Large'}
    ]
  },
  validate: function (attrs) {
    for (var prop in attrs) {
      if (!attrs[prop] || attrs[prop].length === 0) {
        return 'Product details have not been properly input when initializing the Model.'
      }
    }
    // if (attrs.colorChoices.indexOf(attrs.color !== -1)) {
    //   return "Color is incorrect.";
    // }
    //
    // if (!Number.isInteger(attrs.quantity)|| attrs.quantity < 1) {
    //   return "Quantity is incorrect and/or not an integer.";
    // }
    //
    // if (attrs.sizeChoices.indexOf(attrs.size !== -1)) {
    //   return "Size is incorrect.";
    // }
  }
});


