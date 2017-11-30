
var app = app || {};
app.ProductDetailsView = Backbone.Marionette.View.extend({
  className: 'macy__group',
  template: function(data) {
    return Handlebars.compile($('#productDetailsTemplate').html())(data);
  },
  // initialize: function() {
  //   app.EventBus.on('validAnalytics', this.validAnalytics, this);
  //   app.EventBus.on('invalidProduct', this.invalidProduct, this);
  // },
  // validAnalytics: function() {
  //   if (!this.$('.macy--incorrect').hasClass('hidden')) {
  //     this.$('macy--incorrect').addClass('hidden');
  //   }
  // },
  // invalidProduct() {
  //   if (this.$('.macy--incorrect').hasClass('hidden')) {
  //     this.$('.macy--incorrect').removeClass('hidden');
  //   }
  // },
  // events: {
  //   'click #next': 'showAddressView',
  //   'click input': 'changeProductDetail'
  // },
  // showAddressView: function(event) {
  //   event.preventDefault();
  //   $('#next').addClass('hidden');
  //   app.EventBus.trigger('showAddressView');
  // },
  // changeProductDetail: function(event) {
  //   app.EventBus.trigger('changeProductDetail', {attr: event.target.name, value: event.target.value});
  // },
});
