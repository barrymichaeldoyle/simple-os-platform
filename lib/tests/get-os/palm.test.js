/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Palm Results)', () => {
  it('should return Palm when platform is \'PalmOS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PalmOS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Palm');
  });

  it('should return Palm when platform is \'webOS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'webOS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Palm');
  });

  it('should return Palm when platform contains \'Palm\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Palm New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Palm');
  });
});