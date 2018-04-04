import getOS from '~/get-os';

describe('Get OS Function (FirefoxOS Results)', () => {
  // Firefox OS List
  it('should return Firefox OS when platform is \'\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: '', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('FirefoxOS');
  });
});
