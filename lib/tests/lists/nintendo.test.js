import { nintendoList, containsNintendoKeywords } from '~/lists';

describe('Nintendo Keywords', () => {
  it('should return true when platform includes Nintendo', () => {
    expect(containsNintendoKeywords('Nintendo')).toEqual(true);
  });

  it('should return false when platform does not include Nintendo', () => {
    expect(containsNintendoKeywords('Other')).toEqual(false);
  });
});

describe('Nintendo List', () => {
  it('should be the correct list for Nintendo', () => {
    expect(nintendoList).toEqual([
      'New Nintendo 3DS',
      'Nintendo DSi',
      'Nintendo 3DS',
      'Nintendo Wii',
      'Nintendo WiiU',
    ]);
  });
});
