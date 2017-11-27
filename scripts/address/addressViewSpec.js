
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
      app.EventBus.trigger('showAddressView');
    });

    it('unhides itself in the DOM, upon a "showAddressView" event', () => {
      expect(addressView.$el.is(':visible')).toBeTruthy();
    });

    it('hides the finish button, upon a "validAnalytics" event', () => {
      app.EventBus.trigger('validAnalytics');
      expect($('#finish').is(':visible')).toBeFalsy();
    });

    it('hides the error message, upon a "validAnalytics" event', () => {
      app.EventBus.trigger('validAnalytics');
      expect($('.macy--incorrect').is(':visible')).toBeFalsy();
    });

    it('shows the error message, upon an "invalidAddress" event', () => {
      app.EventBus.trigger('invalidAddress');
      expect($('.macy--incorrect').is(':visible')).toBeTruthy();
    });
  });

  describe('Triggering events', () => {
    it('triggers a "showAnalyticsView" event, when the finish button is clicked', () => {
      const spy = jasmine.createSpy('showAnalyticsView');
      app.EventBus.on('showAnalyticsView', spy);

      $('#finish').click();

      expect(spy).toHaveBeenCalled();
    });

    const addressParts = ['addOne', 'addTwo', 'city', 'state', 'zipcode'];
    addressParts.forEach(part => {
      it(`triggers a "changeAddress" event, when user types in the ${part} address line`, () => {
        const spy = jasmine.createSpy('changeAddress');
        app.EventBus.on('changeAddress', spy);

        $(`#${part}`).trigger(jQuery.Event('keyup'));

        expect(spy).toHaveBeenCalled();
      });
    });
  });

});
