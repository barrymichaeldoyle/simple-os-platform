/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (FirefoxOS Results)', () => {
  // Firefox OS List
  it('should return Firefox OS when platform is \'\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: '', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('FirefoxOS');
  });
});
