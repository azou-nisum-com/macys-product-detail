
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
        street2: 'Room 1',
        city: 'Fremont',
        state: 'CA',
        zipCode: '94538',
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

  it('renders street1 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.street1);
  });

  it('renders street2 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.street2);
  });

  it('renders street2 entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.street2);
  });

  it('renders street2 as N/A if not entered in the model', () => {
    analytics.set('street2', '');
    expect(analyticsView.$el).toContainText('N/A');
  });

  it('renders city entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.city);
  });

  it('renders state entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.state);
  });

  it('renders zip code entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.zipCode);
  });
});
