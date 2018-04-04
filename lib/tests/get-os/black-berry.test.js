import getOS from '~/get-os';

describe('Get OS Function (BlackBerry Results)', () => {
  // BlackBerry List
  it('should return BlackBerry when platform is \'BlackBerry\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'BlackBerry', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('BlackBerry');
  });

  it('should return BlackBerry when platform contains \'BlackBerry\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'BlackBerry New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('BlackBerry');
  });
});
