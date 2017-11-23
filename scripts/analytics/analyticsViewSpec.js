
describe('Analytics view', () => {
  let analyticsObject;
  let analytics;
  let analyticsView;

  beforeEach(() => {
    loadFixtures('fixtures.html');

    analyticsObject = {
        colors: 'Blue',
        quantity: '1',
        sizes: '2S',
        address1: '39355 California Street',
        address2: 'Room 1',
        city: 'Fremont',
        state: 'CA',
        zipcode: '94538',
    };
    analytics = new app.Analytics(analyticsObject);
    analyticsView = new app.AnalyticsView({model: analytics});
    analyticsView.render();
  });

  it('renders color entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.color);
  });

  it('renders quantity entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.quantity);
  });

  it('renders size entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.size);
  });

  it('renders address1 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.address1);
  });

  it('renders address2 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.address2);
  });

  it('renders address2 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.address2);
  });

  it('renders address2 as N/A if not entered in the model', () => {
    analytics.set('address2', '');
    expect(analyticsView.$el).toContainText('N/A');
  });

  it('renders city entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.city);
  });

  it('renders state entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.state);
  });

  it('renders zip code entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.zipcode);
  });
});
