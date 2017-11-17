
var app = app || {};
app.AddressView = Backbone.View.extend({
  initialize: function() {
    this.model.bind('change', this.render, this);

    this.render();
  },
  render: function() {
    var template = Handlebars.compile( $('#addressTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
