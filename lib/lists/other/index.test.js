import variousList from './';

describe('Various List', () => {
  it('should be the correct list for Various', () => {
    expect(variousList).toEqual(['HP-UX', 'masking-agent', 'WebTV OS', 'X11']);
  });
});
