/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (FreeBSD Results)', () => {
  it('should return FreeBSD when platform is \'FreeBSD\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'FreeBSD', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform is \'FreeBSD i386\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'FreeBSD i386', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform is \'FreeBSD amd64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'FreeBSD amd64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform contains \'FreeBSD\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'FreeBSD New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('FreeBSD');
  });
});