
var app = app || {};
app.ProductDetailsView = Backbone.View.extend({
  className: 'macy__group',
  id: 'productDetails',
  events: {
    'click #next': 'showAddressView',
    'click input': 'changeProductDetail'
  },
  showAddressView: function(event) {
    event.preventDefault();
    $('#next').addClass('hidden');
    app.EventBus.trigger('showAddressView');
  },
  changeProductDetail: function(event) {
    app.EventBus.trigger('changeProductDetail', {attr: event.target.name, value: event.target.value});
  },
  render: function() {
    let template = Handlebars.compile( $('#productDetailsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
