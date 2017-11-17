
var app = app || {};
app.ProductView = Backbone.View.extend({
  initialize: function() {
    this.productDetails = new app.ProductDetails({
      color: 'Blue',
      colorChoices: ['Blue','Green','Red'],
    });
    this.productDetailsView = new app.ProductDetailsView({model: this.productDetails});

    this.address = new app.Address();
    this.addressView = new app.AddressView({model: this.address});

    this.analytics = new app.Analytics();
    this.analyticsView = new app.AnalyticsView({model: this.analytics});
  },
  events: {
  },
  render: function() {
    var template = Handlebars.compile( $('#productTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    this.assign(this.productDetailsView, '#productDetails');
    this.assign(this.addressView, '#shipAddress');
    this.assign(this.analyticsView, '#analyticsInfo');

    return this;
  },
  assign: function(view, selector) {
    view.setElement(this.$(selector)).render();
  },
});

