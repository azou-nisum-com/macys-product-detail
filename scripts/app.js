
var app = app || {};
app.App = Backbone.Marionette.Application.extend({
  region: '#container',
  onStart: function() {
    const rootView = new app.RootView();
    this.showView(rootView);
  }
});
