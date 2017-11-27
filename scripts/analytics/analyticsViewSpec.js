
describe('Analytics view', () => {
  let analyticsObject = {
    colors: 'Blue',
    quantity: '1',
    sizes: '2S',
    address1: '39355 California Street',
    address2: 'Room 1',
    city: 'Fremont',
    state: 'CA',
    zipcode: '94538',
  };
  let analytics;
  let analyticsView;

  beforeEach(() => {
    loadFixtures('fixtures.html');

    analytics = new app.Analytics(analyticsObject);
    analyticsView = new app.AnalyticsView({model: analytics});
    $('.test').append(analyticsView.render().$el);
  });

  it('is initially hidden', () => {
    expect(analyticsView.$el.is(':visible')).toBeFalsy();
  });

  describe('Rendering', () => {
    for (let prop in analyticsObject) {
      it(`shows ${prop} entered in the model`, () => {
        expect(analyticsView.$el).toContainText(analyticsObject[prop]);
      });
    }

    it('shows address2 as N/A if not entered in the model', () => {
      analytics.set('address2', '');
      expect(analyticsView.$el).toContainText('N/A');
    });
  });

  describe('Events', () => {
    it('unhides itself in the DOM, upon a "showAnalyticsView" event with a valid model', () => {
      app.EventBus.trigger('showAnalyticsView');
      expect(analyticsView.$el.is(':visible')).toBeTruthy();
    });

    it('triggers a "validAnalytics" event, when asked to unhide itself in the DOM, with a valid model', () => {
      const spy = jasmine.createSpy('validAnalytics');
      app.EventBus.on('validAnalytics', spy);

      app.EventBus.trigger('showAnalyticsView');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalidAddress" event, when asked to unhide itself in the DOM, with an invalid address', () => {
      const spy = jasmine.createSpy('invalidAddress');
      app.EventBus.on('invalidAddress', spy);

      analytics.set('address1', '');
      app.EventBus.trigger('showAnalyticsView');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalidAddress" event, when asked to unhide itself in the DOM, with an invalid zip code', () => {
      const spy = jasmine.createSpy('invalidAddress');
      app.EventBus.on('invalidAddress', spy);

      analytics.set('zipcode', '');
      app.EventBus.trigger('showAnalyticsView');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalidProduct" event, when asked to unhide itself in the DOM, with an invalid product', () => {
      const spy = jasmine.createSpy('invalidProduct');
      app.EventBus.on('invalidProduct', spy);

      analytics.set('colors', '');
      app.EventBus.trigger('showAnalyticsView');

      expect(spy).toHaveBeenCalled();
    });

    it('changes the product details it shows, upon a "changeProductDetail" event', () => {
      app.EventBus.trigger('changeProductDetail', {
        attr: 'colors',
        value: 'Green'
      });
      expect(analyticsView.$el).toContainText('Green');
    });

    it('changes the address it shows, upon a "changeAddress" event', () => {
      app.EventBus.trigger('changeAddress', {
        attr: 'address2',
        value: 'Room2'
      });
      expect(analyticsView.$el).toContainText('Room2');
    });
  });

});
