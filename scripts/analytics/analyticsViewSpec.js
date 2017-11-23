
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
    $('.test').append(analyticsView.render().$el);
  });

  it('is initially hidden', () => {
    expect(analyticsView.$el.is(':visible')).toBeFalsy();
  });

  describe('Rendering', () => {
    it('renders color entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.colors);
    });

    it('renders quantity entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.quantity);
    });

    it('renders size entered in the model', () => {
      expect(analyticsView.$el).toContainText(analyticsObject.sizes);
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

  describe('Events', () => {
    it('shows itself upon a showAnalyticsView event with a valid model', () => {
      app.EventBus.trigger('showAnalyticsView');
      expect(analyticsView.$el.is(':visible')).toBeTruthy();
    });

    it('changes data upon a changeProductDetail event', () => {
      app.EventBus.trigger('changeProductDetail', {
        attr: 'colors',
        value: 'Green'
      });
      expect(analyticsView.$el).toContainText('Green');
    });

    it('changes data upon a changeAddress event', () => {
      app.EventBus.trigger('changeAddress', {
        attr: 'address2',
        value: 'Room2'
      });
      expect(analyticsView.$el).toContainText('Room2');
    });
  });

});
