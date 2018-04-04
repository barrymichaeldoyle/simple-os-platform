import { freeBSDList, containsFreeBSDKeywords } from '~/lists';

describe('FreeBSD Keywords', () => {
  it('should return true when platform includes FreeBSD', () => {
    expect(containsFreeBSDKeywords('FreeBSD')).toEqual(true);
  });

  it('should return false when platform does not include FreeBSD', () => {
    expect(containsFreeBSDKeywords('Other')).toEqual(false);
  });
});

describe('FreeBSD List', () => {
  it('should be the correct list for FreeBSD', () => {
    expect(freeBSDList).toEqual(['FreeBSD', 'FreeBSD i386', 'FreeBSD amd64']);
  });
});
