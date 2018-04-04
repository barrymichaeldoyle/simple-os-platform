import windowsList, { containsWindowsKeywords } from './';

describe('Windows Keywords', () => {
  it('should return true when platform includes Win', () => {
    expect(containsWindowsKeywords('Win')).toEqual(true);
  });

  it('should return false when platform does not include Win', () => {
    expect(containsWindowsKeywords('Other')).toEqual(false);
  });
});

describe('Windows List', () => {
  it('should be the correct list for Windows', () => {
    expect(windowsList).toEqual([
      'OS/2',
      'Pocket PC',
      'Windows',
      'Win16',
      'Win32',
      'WinCE',
    ]);
  });
});
