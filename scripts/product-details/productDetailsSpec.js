
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

  describe('Validation', () => {
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

    const validationParams = [
      {name: 'color choices', description: 'are an empty array', type: 'colorChoices', value: []},
      {name: 'color choices', description: 'are not arrays', type: 'colorChoices', value: 'Not an array'},
      {name: 'color choices', description: 'are not arrays of strings', type: 'colorChoices', value: [1, 2, 3]},
      {name: 'quantity', description: 'is not an integer', type: 'quantityMax', value: 'Not an integer.'},
      {name: 'quantity', description: 'is zero', type: 'quantityMax', value: 0},
      {name: 'quantity', description: 'is negative', type: 'quantityMax', value: -1},
      {name: 'size choices', description: 'are empty arrays', type: 'sizeChoices', value: []},
      {name: 'size choices', description: 'are not arrays', type: 'sizeChoices', value: 'Not an array'},
      {name: 'size choices', description: 'are not arrays of objects', type: 'sizeChoices', value: ['Not an array of objects']},
      {name: 'size choices', description: 'are not arrays of objects containing "value" and "text" properties', type: 'sizeChoices', value: [{value: 'No text property.'}]},
      {name: 'size choices', description: 'are not arrays of objects whose properties are strings', type: 'sizeChoices', value: [{value: 0, text: 'Value property not a string.'}]}
    ];
    validationParams.forEach(param => {
      it(`is invalid for ${param.name} that ${param.description}`, () => {
        productDetails.set(param.type, param.value);
        expect(productDetails.isValid()).toBeFalsy();
      });
    });
  });

});
