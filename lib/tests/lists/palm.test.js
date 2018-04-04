import { palmList, containsPalmKeywords } from '~/lists';

describe('Palm Keywords', () => {
  it('should return true when platform includes Palm', () => {
    expect(containsPalmKeywords('Palm')).toEqual(true);
  });

  it('should return false when platform does not include Palm', () => {
    expect(containsPalmKeywords('Other')).toEqual(false);
  });
});

describe('Palm List', () => {
  it('should be the correct list for Palm', () => {
    expect(palmList).toEqual(['PalmOS', 'webOS']);
  });
});
