
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

  describe('Events', () => {
    beforeEach(() => {
      app.EventBus.trigger('showAddressView');
    });

    it('shows itself upon a showAddressView event', () => {
      expect(addressView.$el.is(':visible')).toBeTruthy();
    });

    it('hides the finish button upon a validAnalytics event', () => {
      app.EventBus.trigger('validAnalytics');
      expect($('#finish').is(':visible')).toBeFalsy();
    });

    it('hides the error message upon a validAnalytics event', () => {
      app.EventBus.trigger('validAnalytics');
      expect($('.macy--incorrect').is(':visible')).toBeFalsy();
    });

    it('shows the error message upon a validAnalytics event', () => {
      app.EventBus.trigger('invalidAddress');
      expect($('.macy--incorrect').is(':visible')).toBeTruthy();
    });
  });

});
