
describe('Analytics', () => {
  let analytics;

  beforeEach(() => {
    analytics = new app.Analytics();
  });

  it('should have empty strings as defaults for attributes', () => {
    for (let prop in analytics.attributes) {
      expect(analytics.get(prop)).toBe('');
    }
  });

  it('is invalid without setting proper values', () => {
    expect(analytics.isValid()).toBeFalsy();
  });

  describe('Analytics validation', () => {
    beforeEach(() => {
      analytics.set({
        colors: 'Blue',
        quantity: '1',
        sizes: '2S',
        address1: '39355 California Street',
        address2: 'Room 1',
        city: 'Fremont',
        state: 'CA',
        zipcode: '94538',
      });
    });

    it('is valid with a valid address and product details', () => {
      expect(analytics.isValid()).toBeTruthy();
    });

    it('is valid even without a address2 attribute', () => {
      analytics.set('address2', '');
      expect(analytics.isValid()).toBeTruthy();
    });
  });

});
