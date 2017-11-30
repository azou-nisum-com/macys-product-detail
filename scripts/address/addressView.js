
var app = app || {};
app.AddressView = Backbone.Marionette.View.extend({
  className: 'macy__group',
  // className: 'macy__group hidden',
  template: function(data) {
    return Handlebars.compile($('#addressTemplate').html())(data);
  },
  // initialize: function() {
  //   app.EventBus.on('showAddressView', this.showAddressView, this);
  //   app.EventBus.on('validAnalytics', this.validAnalytics, this);
  //   app.EventBus.on('invalidAddress', this.invalidAddress, this);
  // },
  // showAddressView: function() {
  //   this.$el.removeClass('hidden');
  // },
  // validAnalytics: function() {
  //   if (!this.$('.macy--incorrect').hasClass('hidden')) {
  //     this.$('.macy--incorrect').addClass('hidden');
  //   }
  //   $('#finish').addClass('hidden');
  // },
  // invalidAddress: function() {
  //   if (this.$('.macy--incorrect').hasClass('hidden')) {
  //     this.$('.macy--incorrect').removeClass('hidden');
  //   }
  // },
  // events: {
  //   'keyup input': 'changeAddress',
  //   'click #finish': 'showAnalyticsView'
  // },
  // changeAddress: function(event) {
  //   const $inputValue = $(`input[name="${event.target.name}"]`).val();
  //   app.EventBus.trigger('changeAddress', {attr: event.target.name, value: $inputValue});
  // },
  // showAnalyticsView: function() {
  //   app.EventBus.trigger('showAnalyticsView');
  // },
});
