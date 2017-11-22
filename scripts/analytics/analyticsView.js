
var app = app || {};
app.AnalyticsView = Backbone.View.extend({
  className: 'macy__group',
  id: 'analyticsInfo',
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    let template = Handlebars.compile( $('#analyticsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
