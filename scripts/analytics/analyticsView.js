
var app = app || {};
app.AnalyticsView = Backbone.Marionette.View.extend({
  className: 'macy__group',
  // className: 'macy__group hidden',
  template: function(data) {
    return Handlebars.compile($('#analyticsTemplate').html())(data);
  },
  // className: 'macy__group hidden',
  // initialize: function() {
  //   this.model.on('change', this.render, this);
  //   app.EventBus.on('showAnalyticsView', this.showAnalyticsView, this);
  //   app.EventBus.on('changeProductDetail', this.changeData, this);
  //   app.EventBus.on('changeAddress', this.changeData, this);
  // },
  // changeData: function(data) {
  //   this.model.set(data.attr, data.value);
  // },
  // showAnalyticsView: function() {
  //   const self = this;
  //   if (!self.model.isValid()) {
  //     switch(self.model.validationError) {
  //       case 'Address is incomplete.':
  //         app.EventBus.trigger('invalidAddress');
  //         break;
  //       case 'Zip code is incorrect.':
  //         app.EventBus.trigger('invalidAddress');
  //         break;
  //       case 'Product details are incomplete.':
  //         app.EventBus.trigger('invalidProduct');
  //         break;
  //     }
  //   } else {
  //     self.$el.removeClass('hidden');
  //     app.EventBus.trigger('validAnalytics');
  //   }
  // },
});
