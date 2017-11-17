
Handlebars.registerHelper('timesQuantity', function(items, options) {
  var accum = '';

  for(var i = 0; i < items; ++i) {
    if (i === 0) {
      accum += '<input type="radio" name="quantity" value={{this}} checked>1'
    } else {
      accum += options.fn(i+1);
    }
  }
  return accum;

});
