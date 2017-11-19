
var app = app || {};
app.ProductDetails = Backbone.Model.extend({
  defaults: {
    // color: '',
    colorChoices: [],
    // quantity: 1,
    quantityMax: null,
    // size: '2S',
    sizeChoices: []
  },
  validate: function (attrs) {
    for (let prop in attrs) {
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
