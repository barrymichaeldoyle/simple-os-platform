import sunOSList, { containsSunOSKeywords } from './';

describe('SunOS Keywords', () => {
  it('should return true when platform includes SunOS', () => {
    expect(containsSunOSKeywords('SunOS')).toEqual(true);
  });

  it('should return false when platform does not include SunOS', () => {
    expect(containsSunOSKeywords('Other')).toEqual(false);
  });
});

describe('SunOS List', () => {
  it('should be the correct list for SunOS', () => {
    expect(sunOSList).toEqual(['SunOS', 'SunOS i86pc', 'SunOS sun4u']);
  });
});
