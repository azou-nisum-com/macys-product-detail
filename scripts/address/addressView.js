
var app = app || {};
app.AddressView = Backbone.Marionette.View.extend({
  className: 'macy__group hidden',
  template: function(data) {
    return Handlebars.compile($('#addressTemplate').html())(data);
  },
  initialize: function() {
    this.listenTo(app.NextChannel, 'show:address:view', this.showAddressView);
    this.listenTo(app.ValidChannel, 'valid:analytics', this.validAnalytics);
    this.listenTo(app.ValidChannel, 'invalid:address', this.invalidAddress);
  },
  showAddressView: function() {
    this.$el.removeClass('hidden');
  },
  validAnalytics: function() {
    if (!this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('.macy--incorrect').addClass('hidden');
    }
    $('#finish').addClass('hidden');
  },
  invalidAddress: function() {
    if (this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('.macy--incorrect').removeClass('hidden');
    }
  },
  events: {
    'keyup input': 'changeAddress',
    'click #finish': 'showAnalyticsView'
  },
  changeAddress: function(event) {
    const $inputValue = $(`input[name="${event.target.name}"]`).val();
    app.UpdateChannel.trigger('change:address', {attr: event.target.name, value: $inputValue});
  },
  showAnalyticsView: function() {
    app.NextChannel.trigger('show:analytics:view');
  },
});
