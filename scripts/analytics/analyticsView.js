
var app = app || {};
app.AnalyticsView = Backbone.View.extend({
  initialize: function() {
  },
  render: function() {
    let template = Handlebars.compile( $('#analyticsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
