import { otherList } from '~/lists';

describe('Various List', () => {
  it('should be the correct list for Various', () => {
    expect(otherList).toEqual(['HP-UX', 'masking-agent', 'WebTV OS', 'X11']);
  });
});
