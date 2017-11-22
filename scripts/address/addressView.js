
var app = app || {};
app.AddressView = Backbone.View.extend({
  className: 'macy__group',
  id: 'shipAddress',
  events: {
    'keyup input': 'changeAddress',
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
  changeAddress: function(event) {
    const inputValue = $(`input[name="${event.target.name}"]`).val();
    const inputNamesToModelAttributes = {
      address1: 'street1',
      address2: 'street2',
      city: 'city',
      state: 'state',
      zipcode: 'zipCode'
    };
    app.EventBus.trigger('changeAddress', {attr: inputNamesToModelAttributes[event.target.name], value: inputValue});
  },
  showAnalyticsView: function(event) {
    event.preventDefault();

    if (this.model.isValid()) {
      if (!$('.macy--address--incorrect').hasClass('hidden')) {
        $('.macy--address--incorrect').addClass('hidden');
      }
      $('#finish').addClass('hidden');
      this.createAnalyticsView();
    } else {
      $('.macy--address--incorrect').removeClass('hidden');
    }
  },
  createAnalyticsView: function() {
    let productDetails = {...this.model.attributes};
    const productDetailInputNames = {
      color: 'colors',
      quantity: 'quantity',
      size: 'sizes'
    };
    for (let prop in productDetailInputNames) {
      productDetails[prop] = $(`input[name="${productDetailInputNames[prop]}"]:checked`).val();
    }

    let analytics = new app.Analytics(productDetails);
    let analyticsView = new app.AnalyticsView({model: analytics});
    this.$el.after(analyticsView.render().$el);
  },
  render: function() {
    let template = Handlebars.compile( $('#addressTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
