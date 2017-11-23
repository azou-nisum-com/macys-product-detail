
var app = app || {};
app.AnalyticsView = Backbone.View.extend({
  className: 'macy__group hidden',
  id: 'analyticsInfo',
  initialize: function() {
    this.model.on('change', this.render, this);
    app.EventBus.on('showAnalyticsView', this.showAnalyticsView, this);
    app.EventBus.on('changeProductDetail', this.changeData, this);
    app.EventBus.on('changeAddress', this.changeData, this);
  },
  changeData: function(data) {
    this.model.set(data.attr, data.value);
  },
  showAnalyticsView: function() {
    if (this.model.isValid()) {
      this.$el.removeClass('hidden');
      app.EventBus.trigger('validAnalytics');
    } else {
      app.EventBus.trigger('invalidAnalytics');
    }
  },
  render: function() {
    let template = Handlebars.compile( $('#analyticsTemplate').html() );
    let html = template(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
