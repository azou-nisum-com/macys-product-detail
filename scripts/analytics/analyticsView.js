
var app = app || {};
app.AnalyticsView = Backbone.View.extend({
  className: 'macy__group',
  id: 'analyticsInfo',
  initialize: function() {
    this.model.on('change', this.render, this);
    app.EventBus.on('changeProductDetail', this.changeData, this);
    app.EventBus.on('changeAddress', this.changeData, this);
  },
  changeData: function(data) {
    this.model.set(data.attr, data.value);
  },
  render: function() {
    let template = Handlebars.compile( $('#analyticsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
