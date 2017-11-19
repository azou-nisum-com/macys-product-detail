
$(document).ready(function(){
  let productDetails = new app.ProductDetails({
    colorChoices: ['Blue','Green','Red'],
    quantityMax: 5,
    sizeChoices: [
      {value: '2S', text: 'Small'},
      {value: '3M', text: 'Medium'},
      {value: '4L', text: 'Large'}
    ]
  });
  let productDetailsView = new app.ProductDetailsView({model: productDetails});

  let address = new app.Address();
  let addressView = new app.AddressView({model: address});

  // var analytics = new app.Analytics();
  // var analyticsView = new app.AnalyticsView({model: analytics});

  $('#productDetails').append(productDetailsView.render().$el);
  $('#shipAddress').append(addressView.render().$el);
  // $('#analyticsInfo').append(analyticsView.render().$el);
});