import getOS from '~/get-os';

describe('Get OS Function (FreeBSD Results)', () => {
  it('should return FreeBSD when platform is \'FreeBSD\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform is \'FreeBSD i386\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD i386', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform is \'FreeBSD amd64\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD amd64', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('FreeBSD');
  });

  it('should return FreeBSD when platform contains \'FreeBSD\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('FreeBSD');
  });
});