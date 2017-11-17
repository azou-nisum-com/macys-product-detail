
var app = app || {};
app.ProductDetailsView = Backbone.View.extend({
  initialize: function() {
    this.model.bind('change', this.render, this);

    this.render();
  },
  render: function() {
    var template = Handlebars.compile( $('#productDetailsTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
