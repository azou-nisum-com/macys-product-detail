
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


  $('#container').append(productDetailsView.render().$el);
});
