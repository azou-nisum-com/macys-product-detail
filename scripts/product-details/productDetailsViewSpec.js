
describe('Product details view', () => {
  let productDetailsObject;
  let productDetails;
  let productDetailsView;

  beforeEach(() => {
    loadFixtures('fixtures.html');

    productDetailsObject = {
      colorChoices: ['Blue','Green','Red'],
      quantityMax: 5,
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

  describe('Color choices', () => {
    it('renders number of color choices entered in the model', () => {
      expect($('input[name="colors"]').length).toBe(productDetailsObject.colorChoices.length);
    });

    it('renders text of color choices entered in the model', () => {
      productDetailsObject.colorChoices.forEach(color => {
        expect(productDetailsView.$el).toContainText(color);
      });
    });
  });

  describe('Quantity', () => {
    it('renders quantity choices equal to that entered in the model', () => {
      expect($('input[name="quantity"]').length).toBe(productDetailsObject.quantityMax);
    });
  });

  describe('Size choices', () => {
    it('renders number of size choices entered in the model', () => {
      expect($('input[name="sizes"]').length).toBe(productDetailsObject.sizeChoices.length);
    });

    it('renders text of size choices entered in the model', () => {
      productDetailsObject.sizeChoices.forEach(size => {
        expect(productDetailsView.$el).toContainText(size.text);
      });
    });

    it('Puts the value of size choices for each choice entered in the model', () => {
      productDetailsObject.sizeChoices.forEach(size => {
        expect($(`input[value="${size.value}"]`).parent()).toContainText(size.text);
      });
    });
  });

  describe('Clicking next', () => {
    it('hides the next button', () => {
      const next = $('#next');
      expect(next.is(':visible')).toBeTruthy();
      next.click();
      expect(next.is(':visible')).toBeFalsy();
    });
  });

});
