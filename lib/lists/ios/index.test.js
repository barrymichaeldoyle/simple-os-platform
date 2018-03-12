import iOSList, { containsIOSKeywords } from './';

describe('iOS Keywords', () => {
  it('should return true when platform includes iPad', () => {
    expect(containsIOSKeywords('iPad')).toEqual(true);
  });

  it('should return true when platform includes iPhone', () => {
    expect(containsIOSKeywords('iPhone')).toEqual(true);
  });

  it('should return true when platform includes iPod', () => {
    expect(containsIOSKeywords('iPod')).toEqual(true);
  });

  it('should return true when platform includes Pike', () => {
    expect(containsIOSKeywords('Pike')).toEqual(true);
  });

  it('should return false when platform is something else', () => {
    expect(containsIOSKeywords('Other')).toEqual(false);
  });
});

describe('iOS List', () => {
  it('should be the correct list for iOS', () => {
    expect(iOSList).toEqual([
      'iPad',
      'iPad Simulator',
      'iPhone',
      'iPhone Simulator',
      'Pike v7.6 release 92',
      'Pike v7.8 release 517',
      'iPod',
      'iPod Simulator'
    ]);
  });
});
