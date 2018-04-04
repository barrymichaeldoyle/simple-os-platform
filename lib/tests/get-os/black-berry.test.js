/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (BlackBerry Results)', () => {
  it('should return BlackBerry when platform is \'BlackBerry\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'BlackBerry', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('BlackBerry');
  });

  it('should return BlackBerry when platform contains \'BlackBerry\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'BlackBerry New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('BlackBerry');
  });
});
