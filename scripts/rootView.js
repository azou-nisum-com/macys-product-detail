
var app = app || {};
app.RootView = Backbone.Marionette.View.extend({
  template: function(data) {
    return Handlebars.compile($('#rootTemplate').html())(data);
  },
  regions: {
    product: '#productDetails',
    address: '#shipAddress',
    analytics: '#analyticsInfo'
  },
  onBeforeRender() {
    this.productDetailsObj = {
      colorChoices: ['Blue','Green','Red'],
      quantityMax: 5,
      sizeChoices: [
        {value: '2S', text: 'Small'},
        {value: '3M', text: 'Medium'},
        {value: '4L', text: 'Large'}
      ]
    };
  },
  onRender() {
    this.renderProductDetails();
    this.renderAddress();
    this.renderAnalytics();
  },
  renderProductDetails() {
    const productDetails = new app.ProductDetails(this.productDetailsObj);
    const productDetailsView = new app.ProductDetailsView({model: productDetails});
    this.showChildView('product', productDetailsView);
  },
  renderAddress() {
    const addressView = new app.AddressView();
    this.showChildView('address', addressView);
  },
  renderAnalytics() {
    const analytics = new app.Analytics({
      colors: this.productDetailsObj.colorChoices[0],
      quantity: 1,
      sizes: this.productDetailsObj.sizeChoices[0].value
    });
    const analyticsView = new app.AnalyticsView({model: analytics});
    this.showChildView('analytics', analyticsView);
  }
});
