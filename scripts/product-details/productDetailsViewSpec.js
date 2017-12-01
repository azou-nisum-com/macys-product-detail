
describe('Product details view', () => {
  let productDetailsObject;
  let productDetails;
  let productDetailsView;

  beforeEach(() => {
    loadFixtures('fixtures.html');

    productDetailsObject = {
      colorChoices: ['Blue','Green','Red'],
      quantityChoices: [1, 2, 3, 4, 5],
      sizeChoices: [
        {value: '2S', text: 'Small'},
        {value: '3M', text: 'Medium'},
        {value: '4L', text: 'Large'}
      ]
    };
    productDetails = new app.ProductDetails(productDetailsObject);
    productDetailsView = new app.ProductDetailsView({model: productDetails});
    $('.test').append(productDetailsView.render().$el);
  });

  describe('Rendering', () => {
    it('shows number of color choices entered in the model', () => {
      expect($('input[name="colors"]').length).toBe(productDetailsObject.colorChoices.length);
    });

    it('shows text of color choices entered in the model', () => {
      productDetailsObject.colorChoices.forEach(color => {
        expect(productDetailsView.$el).toContainText(color);
      });
    });

    it('shows quantity choices equal to that entered in the model', () => {
      expect($('input[name="quantity"]').length).toBe(productDetailsObject.quantityChoices.length);
    });

    it('shows number of size choices entered in the model', () => {
      expect($('input[name="sizes"]').length).toBe(productDetailsObject.sizeChoices.length);
    });

    it('shows text of size choices entered in the model', () => {
      productDetailsObject.sizeChoices.forEach(size => {
        expect(productDetailsView.$el).toContainText(size.text);
      });
    });

    it('shows the value of size choices for each choice entered in the model', () => {
      productDetailsObject.sizeChoices.forEach(size => {
        expect($(`input[value="${size.value}"]`).parent()).toContainText(size.text);
      });
    });
  });

  describe('Events', () => {
    it('hides the next button, when the next button is clicked', () => {
      const $next = $('#next');
      expect($next.is(':visible')).toBeTruthy();
      $next.click();
      expect($next.is(':visible')).toBeFalsy();
    });

    it('triggers a "showAddressView" event, when the next button is clicked', () => {
      const spy = jasmine.createSpy('showAddressView');
      app.EventBus.on('showAddressView', spy);

      $('#next').click();

      expect(spy).toHaveBeenCalled();
    });

    const inputNames = ['colors', 'quantity', 'sizes'];
    inputNames.forEach(name => {
      it(`passes selected data into a "changeProductDetail" event, when the user selects a ${name} radio button`, () => {
        const spy = jasmine.createSpy('changeProductDetail');
        app.EventBus.on('changeProductDetail', spy);

        const $secondRadioButton = $(`input[name="${name}"]:eq(1)`);
        const expectedData = {
          attr: name,
          value: $secondRadioButton.val()
        };

        $secondRadioButton.click();

        expect(spy).toHaveBeenCalledWith(expectedData);
      });
    });

  });

});
