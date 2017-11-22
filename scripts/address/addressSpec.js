
describe('Address', () => {
  let address;

  beforeEach(() => {
    address = new app.Address();
  });

  it('should have empty strings as defaults for address attributes', () => {
    for (let prop in address.attributes) {
      expect(address.get(prop)).toBe('');
    }
  });

  it('is initially invalid', () => {
    expect(address.isValid()).toBeFalsy();
  });

  describe('Address validation', () => {
    beforeEach(() => {
      address.set({
        street1: '39355 California Street',
        street2: 'Room 1',
        city: 'Fremont',
        state: 'CA',
        zipCode: '94538',
      });
    });

    it('is valid with a valid address', () => {
      expect(address.isValid()).toBeTruthy();
    });

    it('is valid even without a street2 attribute', () => {
      address.set('street2', '');
      expect(address.isValid()).toBeTruthy();
    });

    it('is invalid for zip codes that are not five-digit integers', () => {
      address.set('zipCode', 'Not a number.');
      expect(address.isValid()).toBeFalsy();
    });

    it('is invalid for zip codes that are not strictly five digits', () => {
      address.set('zipCode', '9453');
      expect(address.isValid()).toBeFalsy();
    });
  });

});
