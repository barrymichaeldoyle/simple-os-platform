import { playStationList, containsPlayStationKeywords } from '~/lists';

describe('PlayStation Keywords', () => {
  it('should return true when platform includes PlayStation', () => {
    expect(containsPlayStationKeywords('PlayStation')).toEqual(true);
  });

  it('should return true when platform includes PSP', () => {
    expect(containsPlayStationKeywords('PSP')).toEqual(true);
  });

  it('should return false when platform includes something else', () => {
    expect(containsPlayStationKeywords('Other')).toEqual(false);
  });
});

describe('PlayStation List', () => {
  it('should be the correct list for PlayStation', () => {
    expect(playStationList).toEqual(['PLAYSTATION 3', 'PlayStation 4', 'PSP']);
  });
});
