
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
        color: 'Blue',
        quantity: '1',
        size: '2S',
        street1: '39355 California Street',
        street2: 'Room 1',
        city: 'Fremont',
        state: 'CA',
        zipCode: '94538',
      });
    });

    it('is valid with a valid address and product details', () => {
      expect(analytics.isValid()).toBeTruthy();
    });

    it('is valid even without a street2 attribute', () => {
      analytics.set('street2', '');
      expect(analytics.isValid()).toBeTruthy();
    });
  });

});
