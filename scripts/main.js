$(document).ready(function(){
  var product = new app.Product();
  var productView = new app.ProductView({model: product});

  $('body').append(productView.render().$el);

  $('#size-selection').show();

  $('#facets').on('change', function() {

    $('#size-selection').hide();
    $('#color-selection').hide();
    $('#quantity-selection').hide();

    if (this.value == 'Size') {
      $('#size-selection').show();
    } else if (this.value == 'Color') {
      $('#color-selection').show();
    } else {
      $('#quantity-selection').show();
    }
  });

  $('#next').on('click', function() {
    $('#shipaddress').show();
  });

  $('#finish').on('click', function() {
    $('#analyticsinfo').show();
    // Display the information picked up above.
  });
});