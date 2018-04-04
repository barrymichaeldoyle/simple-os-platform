/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (SunOS Results)', () => {
  it('should return SunOS when platform is \'SunOS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'SunOS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform is \'SunOS i86pc\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'SunOS i86pc', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform is \'SunOS sun4u\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'SunOS sun4u', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform contains \'SunOS\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'SunOS New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('SunOS');
  });
});