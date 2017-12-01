
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
    it('unhides itself in the DOM, upon a "show:analytics:view" event with a valid model', () => {
      app.NextChannel.trigger('show:analytics:view');
      expect(analyticsView.$el.is(':visible')).toBeTruthy();
    });

    it('triggers a "valid:analytics" event, when asked to unhide itself in the DOM, with a valid model', () => {
      const spy = jasmine.createSpy('valid:analytics');
      app.ValidChannel.on('valid:analytics', spy);

      app.NextChannel.trigger('show:analytics:view');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalid:address" event, when asked to unhide itself in the DOM, with an invalid address', () => {
      const spy = jasmine.createSpy('invalid:address');
      app.ValidChannel.on('invalid:address', spy);

      analytics.set('address1', '');
      app.NextChannel.trigger('show:analytics:view');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalid:address" event, when asked to unhide itself in the DOM, with an invalid zip code', () => {
      const spy = jasmine.createSpy('invalid:address');
      app.ValidChannel.on('invalid:address', spy);

      analytics.set('zipcode', '');
      app.NextChannel.trigger('show:analytics:view');

      expect(spy).toHaveBeenCalled();
    });

    it('triggers an "invalid:product" event, when asked to unhide itself in the DOM, with an invalid product', () => {
      const spy = jasmine.createSpy('invalid:product');
      app.ValidChannel.on('invalid:product', spy);

      analytics.set('colors', '');
      app.NextChannel.trigger('show:analytics:view');

      expect(spy).toHaveBeenCalled();
    });

    it('changes the product details it shows, upon a "change:product:detail" event', () => {
      app.UpdateChannel.trigger('change:product:detail', {
        attr: 'colors',
        value: 'Green'
      });
      expect(analyticsView.$el).toContainText('Green');
    });

    it('changes the address it shows, upon a "change:address" event', () => {
      app.UpdateChannel.trigger('change:address', {
        attr: 'address2',
        value: 'Room2'
      });
      expect(analyticsView.$el).toContainText('Room2');
    });
  });

});
