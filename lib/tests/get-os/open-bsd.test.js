/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (OpenBSD Results)', () => {
  it('should return OpenBSD when platform is \'OpenBSD amd64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'OpenBSD amd64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('OpenBSD');
  });

  it('should return OpenBSD when platform contains \'OpenBSD\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'OpenBSD New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('OpenBSD');
  });
});