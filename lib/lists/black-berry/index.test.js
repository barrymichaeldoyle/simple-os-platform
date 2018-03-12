import blackBerryList, { containsBlackBerryKeywords } from './';

describe('BlackBerry Keywords', () => {
  it('should return true when platform includes BlackBerry', () => {
    expect(containsBlackBerryKeywords('BlackBerry')).toEqual(true);
  });

  it('should return false when platform does not include BlackBerry', () => {
    expect(containsBlackBerryKeywords('Other')).toEqual(false);
  });
});

describe('BlackBerry List', () => {
  it('should be the correct list for BlackBerry', () => {
    expect(blackBerryList).toEqual(['BlackBerry']);
  });
});
