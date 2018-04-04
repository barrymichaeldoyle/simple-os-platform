import { openBSDList, containsOpenBSDKeywords } from '~/lists';

describe('OpenBSD Keywords', () => {
  it('should return true when platform includes OpenBSD', () => {
    expect(containsOpenBSDKeywords('OpenBSD')).toEqual(true);
  });

  it('should return false when platform does not include OpenBSD', () => {
    expect(containsOpenBSDKeywords('Other')).toEqual(false);
  });
});

describe('OpenBSD List', () => {
  it('should be the correct list for OpenBSD', () => {
    expect(openBSDList).toEqual(['OpenBSD amd64']);
  });
});
