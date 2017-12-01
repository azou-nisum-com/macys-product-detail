
var app = app || {};
app.AnalyticsView = Backbone.Marionette.View.extend({
  className: 'macy__group hidden',
  template: function(data) {
    return Handlebars.compile($('#analyticsTemplate').html())(data);
  },
  initialize: function() {
    this.listenTo(app.UpdateChannel, 'change:product:detail', this.changeData);
    this.listenTo(app.UpdateChannel, 'change:address', this.changeData);
    this.listenTo(app.NextChannel, 'show:analytics:view', this.showAnalyticsView);
  },
  changeData: function(data) {
    this.model.set(data.attr, data.value);
  },
  showAnalyticsView: function() {
    const self = this;
    if (!self.model.isValid()) {
      switch(self.model.validationError) {
        case 'Address is incomplete.':
          app.ValidChannel.trigger('invalid:address');
          break;
        case 'Zip code is incorrect.':
          app.ValidChannel.trigger('invalid:address');
          break;
        case 'Product details are incomplete.':
          app.ValidChannel.trigger('invalid:product');
          break;
      }
    } else {
      self.$el.removeClass('hidden');
      app.ValidChannel.trigger('valid:analytics');
    }
  },
  modelEvents: {
    'change': 'render'
  }
});
