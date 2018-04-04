/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Android Results)', () => {
  it('should return Android when platform is \'Android\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Android', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Android');
  });

  it('should return Android when platform is null', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: null, writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Android');
  });

  it('should return Android when platform is undefined', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: undefined, writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Android');
  });

  it('should return Android when platform contains \'Android\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Android New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Android');
  });
});
