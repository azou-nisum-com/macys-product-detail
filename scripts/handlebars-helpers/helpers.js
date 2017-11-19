
Handlebars.registerHelper('timesQuantity', function(items, options) {
  let accum = '';

  for(let i = 0; i < items; ++i) {
    if (i === 0) {
      accum += '<input type="radio" name="quantity" value="1" checked>1'
    } else {
      accum += options.fn(i+1);
    }
  }
  return accum;

});
