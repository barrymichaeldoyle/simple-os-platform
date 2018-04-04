import { androidList, containsAndroidKeywords } from '~/lists';

describe('Android Keywords', () => {
  it('should return true when platform includes Android', () => {
    expect(containsAndroidKeywords('Android')).toEqual(true);
  });

  it('should return false when platform does not include Android', () => {
    expect(containsAndroidKeywords('Other')).toEqual(false);
  });
});

describe('Android List', () => {
  it('should be the correct list for Android', () => {
    expect(androidList).toEqual(['Android', null, undefined]);
  });
});

