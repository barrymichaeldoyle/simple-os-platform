/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Other Results)', () => {
  it('should return the platform value if none of the cases above occur', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Something Unlisted', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Something Unlisted');
  });
});