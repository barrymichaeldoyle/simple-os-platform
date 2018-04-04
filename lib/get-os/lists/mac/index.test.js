import macList, { containsMacKeywords } from './';

describe('Mac Keywords', () => {
  it('should return true when platform includes Mac', () => {
    expect(containsMacKeywords('Mac')).toEqual(true);
  });

  it('should return false when platform does not include Mac', () => {
    expect(containsMacKeywords('Other')).toEqual(false);
  });
});

describe('Mac List', () => {
  it('should be the correct list for Mac', () => {
    expect(macList).toEqual(['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']);
  });
});
