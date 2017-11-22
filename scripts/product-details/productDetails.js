
var app = app || {};
app.ProductDetails = Backbone.Model.extend({
  defaults: {
    colorChoices: [],
    quantityMax: null,
    sizeChoices: []
  },
  validate: function (attrs) {
    for (let prop in attrs) {
      if (!attrs[prop] || attrs[prop].length === 0) {
        return 'Product details have not been properly input when initializing the Model.'
      }
    }

    if (isNaN(attrs.quantityMax) || attrs.quantityMax <= 0) {
      return 'Quantity max must be a positive integer';
    }

    if (!Array.isArray(attrs.colorChoices) || !attrs.colorChoices.every(color => typeof color === 'string')) {
      return 'Color choices must be an array of strings.';
    }

    function checkSize(size) {
      if (!size.hasOwnProperty('value') || !size.hasOwnProperty('text')) {
        return false
      } else {
        return typeof size['value'] === 'string' && typeof size['text'] === 'string';
      }
    }

    if (!Array.isArray(attrs.sizeChoices) || !attrs.sizeChoices.every(checkSize)) {
      return 'Size choices must all be objects containing value and text properties whose values are strings.';
    }
  }
});
