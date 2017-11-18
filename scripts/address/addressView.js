
var app = app || {};
app.AddressView = Backbone.View.extend({
  initialize: function() {
  },
  events: {
    'keyup #addOne': function() {this.setAddressInfo('address1', 'street1')},
    'keyup #addTwo': function() {this.setAddressInfo('address2', 'street2')},
    'keyup #city': function() {this.setAddressInfo('city', 'city')},
    'keyup #state': function() {this.setAddressInfo('state', 'state')},
    'keyup #zipcode': function() {this.setAddressInfo('zipcode', 'zipCode')},
    'click #finish': 'showAnalyticsView'
  },
  setAddressInfo: function(inputName, modelAttribute) {
    var attribute = $('input[name="' + inputName + '"]').val();
    this.model.set(modelAttribute, attribute);
  },
  showAnalyticsView: function() {
    if (this.model.isValid()) {
      if (!$('.address--incorrect').hasClass('hidden')) {
        $('.address--incorrect').addClass('hidden');
      }
      $('#finish').addClass('hidden');
    } else {
      $('.address--incorrect').removeClass('hidden');
    }
  },
  render: function() {
    var template = Handlebars.compile( $('#addressTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
