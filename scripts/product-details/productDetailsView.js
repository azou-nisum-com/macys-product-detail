
var app = app || {};
app.ProductDetailsView = Backbone.View.extend({
  className: 'macy__group',
  id: 'productDetails',
  initialize: function() {
    app.EventBus.on('validAnalytics', this.validAnalytics, this);
    app.EventBus.on('invalidProduct', this.invalidProduct, this);
  },
  validAnalytics: function() {
    if (!this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('macy--incorrect').addClass('hidden');
    }
  },
  invalidProduct() {
    if (this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('.macy--incorrect').removeClass('hidden');
    }
  },
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
