
describe('Address view', () => {
  let address;
  let addressView;

  beforeEach(() => {
    loadFixtures('fixtures.html');
    address = new app.Address();
    addressView = new app.AddressView({model: address});
    $('.test').append(addressView.render().$el);
  });

  // it('Enters address data to the model when user types', () => {
  //   const addressParts = [
  //     {htmlId: 'addOne', modelAttr: 'street1'},
  //     {htmlId: 'addTwo', modelAttr: 'street2'},
  //     {htmlId: 'city', modelAttr: 'city'},
  //     {htmlId: 'state', modelAttr: 'state'},
  //     {htmlId: 'zipcode', modelAttr: 'zipCode'}
  //   ];
  //   const e = jQuery.Event('keyup');
  //   e.which = 65;
  //   e.keyCode = 65;
  //
  //   addressParts.forEach(part => {
  //     $(`#${part.htmlId}`).trigger(e);
  //     expect(addressView.model.get(part.modelAttr)).toEqual('a');
  //   });
  // });

});

