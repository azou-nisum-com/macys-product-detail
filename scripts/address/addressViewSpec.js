
describe('Address view', () => {
  let addressView;

  beforeEach(() => {
    loadFixtures('fixtures.html');
    addressView = new app.AddressView();

    $('.test').append(addressView.render().$el);
  });

  it('is initially hidden', () => {
    expect(addressView.$el.is(':visible')).toBeFalsy();
  });

  describe('Responding to events', () => {
    beforeEach(() => {
      app.NextChannel.trigger('show:address:view');
    });

    it('unhides itself in the DOM, upon a "show:address:view" event', () => {
      expect(addressView.$el.is(':visible')).toBeTruthy();
    });

    it('hides the finish button, upon a "valid:analytics" event', () => {
      app.ValidChannel.trigger('valid:analytics');
      expect($('#finish').is(':visible')).toBeFalsy();
    });

    it('hides the error message, upon a "valid:analytics" event', () => {
      app.ValidChannel.trigger('valid:analytics');
      expect($('.macy--incorrect').is(':visible')).toBeFalsy();
    });

    it('shows the error message, upon an "invalid:address" event', () => {
      app.ValidChannel.trigger('invalid:address');
      expect($('.macy--incorrect').is(':visible')).toBeTruthy();
    });
  });

  describe('Triggering events', () => {
    it('triggers a "show:analytics:view" event, when the finish button is clicked', () => {
      const spy = jasmine.createSpy('showAnalyticsView');
      app.NextChannel.on('show:analytics:view', spy);

      $('#finish').click();

      expect(spy).toHaveBeenCalled();
    });

    const addressParts = ['addOne', 'addTwo', 'city', 'state', 'zipcode'];
    addressParts.forEach(part => {
      it(`passes input data into a "change:address" event, when user types in the ${part} address line`, () => {
        const spy = jasmine.createSpy('change:address');
        app.UpdateChannel.on('change:address', spy);

        const $input = $(`#${part}`);
        const expectedValue = '1';
        const expectedData = {
          attr: $input.attr('name'),
          value: expectedValue
        };

        $input.val(expectedValue);
        $input.trigger(jQuery.Event('keyup'));

        expect(spy).toHaveBeenCalledWith(expectedData);
      });
    });
  });

});
