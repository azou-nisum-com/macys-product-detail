
var app = app || {};
app.ProductDetailsView = Backbone.View.extend({
  // events: {
  //   'change #color-selection': function(){this.setProductInfo('colors', 'color')},
  //   'change #quantity-selection': function(){this.setProductInfo('quantity', 'quantity')},
  //   'change #size-selection': function(){this.setProductInfo('sizes', 'size')}
  // },
  // setProductInfo: function(inputName, modelAttribute) {
  //   const attribute = $('input[name="' + inputName + '"]:checked').val();
  //   this.model.set(modelAttribute, attribute);
  // },
  events: {
    'click #next': 'showAddressView'
  },
  showAddressView: function() {
    event.preventDefault();
    $('#shipAddress').removeClass('hidden');
    $('#next').addClass('hidden');
  },
  render: function() {
    let template = Handlebars.compile( $('#productDetailsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
