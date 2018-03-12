import linuxList, { containsLinuxKeywords } from './';

describe('Linux Keywords', () => {
  it('should return true when platform includes Linux', () => {
    expect(containsLinuxKeywords('Linux')).toEqual(true);
  });

  it('should return false when platform does not include Linux', () => {
    expect(containsLinuxKeywords('Other')).toEqual(false);
  });
});

describe('Linux List', () => {
  it('should be the correct list for Linux', () => {
    expect(linuxList).toEqual([
      'Linux',
      'Linux aarch64',
      'Linux armv5tejl',
      'Linux armv61',
      'Linux armv71',
      'Linux i686',
      'Linux i686 on x86_64',
      'Linux i686 X11',
      'Linux MSM8960_v3.2.1.1_N_R069_Rev:18',
      'Linux ppc64',
      'Linux x86_64',
      'Linux x86_64 X11',
    ]);
  });
});
