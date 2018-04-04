/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Windows Results)', () => {
  it('should return Windows when platform is \'OS/2\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'OS/2', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Pocket PC\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Pocket PC', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Windows\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Windows', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Win16\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Win16', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Win32\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Win32', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'WinCE\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'WinCE', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform contains \'Windows\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Windows New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Windows');
  });
});