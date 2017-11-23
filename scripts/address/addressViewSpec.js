
describe('Address view', () => {
  let addressObject;
  let address;
  let addressView;

  beforeEach(() => {
    loadFixtures('fixtures.html');
    addressObject = {
      address1: '39355 California Street',
      address2: 'Room 1',
      city: 'Fremont',
      state: 'CA',
      zipcode: '94538',
    };
    address = new app.Address();
    addressView = new app.AddressView({model: address});

    $('.test').append(addressView.render().$el);
  });

  describe('Inputting address data', () => {
    const addressParts = [
      {htmlId: 'addOne', modelAttr: 'address1'},
      {htmlId: 'addTwo', modelAttr: 'address2'},
      {htmlId: 'city', modelAttr: 'city'},
      {htmlId: 'state', modelAttr: 'state'},
      {htmlId: 'zipcode', modelAttr: 'zipcode'}
    ];

    addressParts.forEach(part => {
      it(`Enters ${part.modelAttr} to the model when user types`, () => {
        $(`#${part.htmlId}`).val('1');
        $(`#${part.htmlId}`).trigger(jQuery.Event('keyup'));
        expect(addressView.model.get(part.modelAttr)).toBe('1');
      });
    });
  });

  describe('Clicking finish', () => {
    describe('Valid address', () => {
      beforeEach(() => {
        address.set(addressObject);
      });

      it('hides the finish button', () => {
        const finish = $('#finish');
        expect(finish.is(":visible")).toBeTruthy();
        finish.click();
        expect(finish.is(":visible")).toBeFalsy();
      });

      it('creates a new analytics view', () => {
        $('#finish').click();
        expect($('#analyticsInfo')).toBeInDOM();
      });
    });

    describe('Invalid address', () => {
      beforeEach(() => {
        $('#finish').click();
      });

      it('does not hide the finish button', () => {
        expect($('#finish').is(":visible")).toBeTruthy();
      });

      it('does not create a new analytics view', () => {
        expect($('#analyticsInfo')).not.toBeInDOM();
      });

      it('shows an error message', () => {
        expect($('.macy--address--incorrect').is(":visible")).toBeTruthy();
      });

      it('hides the error message when a valid address is input', () => {
        address.set(addressObject);
        $('#finish').click();
        expect($('.macy--address--incorrect').is(":visible")).toBeFalsy();
      });
    });
  });

});
