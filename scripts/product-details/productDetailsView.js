
var app = app || {};
app.ProductDetailsView = Backbone.View.extend({
  events: {
    'change #color-selection': 'setProductColor',
    'change #quantity-selection': 'setProductQuantity',
    'change #size-selection': 'setProductSize'
  },
  setProductColor: function() {
    var color = $('input[name="colors"]:checked').val();
    this.model.set('color', color);
  },
  setProductQuantity: function() {
    var quantity = $('input[name="quantity"]:checked').val();
    this.model.set('quantity', quantity);
  },
  setProductSize: function() {
    var size = $('input[name="sizes"]:checked').val();
    this.model.set('size', size);
  },
  render: function() {
    var template = Handlebars.compile( $('#productDetailsTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
