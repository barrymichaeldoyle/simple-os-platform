import { symbianList, containsSymbianKeywords } from '~/lists';

describe('Symbian Keywords', () => {
  it('should return true when platform includes Symbian', () => {
    expect(containsSymbianKeywords('Symbian')).toEqual(true);
  });

  it('should return false when platform does not include Symbian', () => {
    expect(containsSymbianKeywords('Other')).toEqual(false);
  });
});

describe('Symbian List', () => {
  it('should be the correct list for Symbian', () => {
    expect(symbianList).toEqual([
      'Nokia_Series_40',
      'S60',
      'Symbian',
      'Symbian OS'
    ]);
  });
});
