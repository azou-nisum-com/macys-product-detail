
var app = app || {};
app.AddressView = Backbone.View.extend({
  className: 'macy__group hidden',
  id: 'shipAddress',
  initialize: function() {
    app.EventBus.on('invalidAddress', this.invalidAddress, this);
    app.EventBus.on('showAddressView', this.showAddressView, this);
    app.EventBus.on('validAnalytics', this.validAnalytics, this);
  },
  invalidAddress: function() {
    if ($('.macy--address--incorrect').hasClass('hidden')) {
      $('.macy--address--incorrect').removeClass('hidden');
    }
  },
  showAddressView: function() {
    this.$el.removeClass('hidden');
  },
  validAnalytics: function() {
    if (!$('.macy--address--incorrect').hasClass('hidden')) {
      $('.macy--address--incorrect').addClass('hidden');
    }
    $('#finish').addClass('hidden');
  },
  events: {
    'keyup input': 'changeAddress',
    'click #finish': 'showAnalyticsView'
  },
  changeAddress: function(event) {
    const inputValue = $(`input[name="${event.target.name}"]`).val();
    app.EventBus.trigger('changeAddress', {attr: event.target.name, value: inputValue});
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
