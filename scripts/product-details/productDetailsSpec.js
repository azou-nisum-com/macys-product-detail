
describe('Product details', () => {
  let productDetails;

  beforeEach(() => {
    productDetails = new app.ProductDetails();
  });

  it('should set colorChoices and sizeChoices as empty arrays, while setting quantityMax as null', () => {
    expect(productDetails.get('colorChoices')).toEqual([]);
    expect(productDetails.get('quantityMax')).toBe(null);
    expect(productDetails.get('sizeChoices')).toEqual([]);
  });

  it('is invalid without setting proper values', () => {
    expect(productDetails.isValid()).toBeFalsy();
  });

  describe('Product details validation', () => {
    beforeEach(() => {
      productDetails.set({
        colorChoices: ['Blue','Green','Red'],
        quantityMax: 5,
        sizeChoices: [
          {value: '2S', text: 'Small'},
          {value: '3M', text: 'Medium'},
          {value: '4L', text: 'Large'}
        ]
      });
    });

    it('is valid with valid product details', () => {
      expect(productDetails.isValid()).toBeTruthy();
    });

    describe('Color choices', () => {
      it('is invalid for color choices that are an empty array', () => {
        productDetails.set('colorChoices', []);
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for color choices that are not arrays', () => {
        productDetails.set('colorChoices', 'Not an array.');
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for color choices that are not arrays of strings', () => {
        productDetails.set('colorChoices', [1, 2, 3]);
        expect(productDetails.isValid()).toBeFalsy();
      });
    });

    describe('Quantity max', () => {
      it('is invalid for quantity max that is not an integer', () => {
        productDetails.set('quantityMax', 'Not an integer.');
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for quantity max that is zero', () => {
        productDetails.set('quantityMax', 0);
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for quantity max that is negative', () => {
        productDetails.set('quantityMax', -1);
        expect(productDetails.isValid()).toBeFalsy();
      });
    });

    describe('Size choices', () => {
      it('is invalid for size choices that are empty arrays', () => {
        productDetails.set('sizeChoices', []);
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for size choices that are not arrays', () => {
        productDetails.set('sizeChoices', 'Not an array.');
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for size choices that are not arrays of objects', () => {
        productDetails.set('sizeChoices', ['Not an array of objects']);
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for size choices that are not arrays of objects containing "value" and "text" properties', () => {
        productDetails.set('quantityMax', [{value: 'No text property.'}]);
        expect(productDetails.isValid()).toBeFalsy();

        productDetails.set('quantityMax', [{text: 'No value property.'}]);
        expect(productDetails.isValid()).toBeFalsy();
      });

      it('is invalid for size choices that are not arrays of objects whose properties are strings', () => {
        productDetails.set('quantityMax', [{value: 0, text: 'Value property not a string.'}]);
        expect(productDetails.isValid()).toBeFalsy();
      });
    });
  });

});
