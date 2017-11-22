
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
  className: 'macy__group',
  id: 'productDetails',
  events: {
    'click #next': 'showAddressView'
  },
  showAddressView: function(event) {
    event.preventDefault();
    $('#next').addClass('hidden');
    let address = new app.Address();
    let addressView = new app.AddressView({model: address});
    this.$el.after(addressView.render().$el);
  },
  render: function() {
    let template = Handlebars.compile( $('#productDetailsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
