
var app = app || {};
app.AddressView = Backbone.View.extend({
  className: 'macy__group hidden',
  id: 'shipAddress',
  initialize: function() {
    app.EventBus.on('showAddressView', this.showAddressView, this);
    app.EventBus.on('validAnalytics', this.validAnalytics, this);
    app.EventBus.on('invalidAddress', this.invalidAddress, this);
  },
  showAddressView: function() {
    this.$el.removeClass('hidden');
  },
  validAnalytics: function() {
    if (!this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('.macy--incorrect').addClass('hidden');
    }
    this.$('#finish').addClass('hidden');
  },
  invalidAddress: function() {
    if (this.$('.macy--incorrect').hasClass('hidden')) {
      this.$('.macy--incorrect').removeClass('hidden');
    }
  },
  events: {
    'input input': 'changeAddress',
    'click #finish': 'showAnalyticsView'
  },
  changeAddress: function(event) {
    const $inputValue = $(`input[name="${event.target.name}"]`).val();
    app.EventBus.trigger('changeAddress', {attr: event.target.name, value: $inputValue});
  },
  showAnalyticsView: function() {
    app.EventBus.trigger('showAnalyticsView');
  },
  render: function() {
    let template = Handlebars.compile( $('#addressTemplate').html() );
    this.$el.html(template);

    return this;
  }
});
