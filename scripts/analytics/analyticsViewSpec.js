
describe('Analytics view', () => {
  let analyticsObject;
  let analytics;
  let analyticsView;

  beforeEach(() => {
    loadFixtures('fixtures.html');

    analyticsObject = {
        color: 'Blue',
        quantity: '1',
        size: '2S',
        street1: '39355 California Street',
        street2: '',
        city: 'Fremont',
        state: 'CA',
        zipCode: '94538',
    };
    analytics = new app.Analytics(analyticsObject);
    analyticsView = new app.AnalyticsView({model: analytics});
    analyticsView.render();
  });

  it('Renders analytics data entered in the model', () => {
    for (let prop in analyticsObject) {
      expect(analyticsView.$el).toContainText(analyticsObject[prop]);
    }
  });

});

