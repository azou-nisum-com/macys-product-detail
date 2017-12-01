
var app = app || {};
app.ProductDetailsView = Backbone.Marionette.View.extend({
  className: 'macy__group',
  template: function(data) {
    return Handlebars.compile($('#productDetailsTemplate').html())(data);
  },
  initialize: function() {
    this.listenTo(app.ValidChannel, 'valid:analytics', this.validAnalytics);
    this.listenTo(app.ValidChannel, 'invalid:product', this.invalidProduct);
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

    app.NextChannel.trigger('show:address:view');
  },
  changeProductDetail: function(event) {
    app.UpdateChannel.trigger('change:product:detail', {attr: event.target.name, value: event.target.value});
  },
});
