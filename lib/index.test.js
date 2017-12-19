import guid from './';

describe('guid', () => {
  it('should generate a guid', () => {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    const id = guid();

    expect(pattern.test(id)).toEqual(true);
  });
});
