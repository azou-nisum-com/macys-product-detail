
$(document).ready(function(){
  const productDetailsObj = {
    colorChoices: ['Blue','Green','Red'],
    quantityChoices: [1, 2, 3, 4, 5],
    sizeChoices: [
      {value: '2S', text: 'Small'},
      {value: '3M', text: 'Medium'},
      {value: '4L', text: 'Large'}
    ]
  };

  let productDetails = new app.ProductDetails(productDetailsObj);
  let productDetailsView = new app.ProductDetailsView({model: productDetails});

  let addressView = new app.AddressView();

  let analytics = new app.Analytics({
    colors: productDetailsObj.colorChoices[0],
    quantity: 1,
    sizes: productDetailsObj.sizeChoices[0].value
  });
  let analyticsView = new app.AnalyticsView({model: analytics});

  $('#container').append(productDetailsView.render().$el);
  $('#container').append(addressView.render().$el);
  $('#container').append(analyticsView.render().$el);
});
