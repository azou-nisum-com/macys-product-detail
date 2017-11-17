
Handlebars.registerHelper('timesQuantity', function(items, options) {
  var accum = '';

  for(var i = 0; i < items; ++i)
    accum += options.fn(i+1);
  return accum;

});
