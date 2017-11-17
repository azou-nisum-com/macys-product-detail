
var app = app || {};
app.AnalyticsView = Backbone.View.extend({
  initialize: function() {
    this.model.bind('change', this.render, this);

    this.render();
  },
  render: function() {
    var template = Handlebars.compile( $('#analyticsTemplate').html() );
    var html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
