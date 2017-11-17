
var app = app || {};
app.Product = Backbone.Model.extend({
  defaults: {
    title: 'This is a Backbone Demo'
  },
  validate: function(attrs){
    if (!attrs.title) {
      return "Title is required.";
    }
  }
});
