import getOS from '~/get-os';

describe('Get OS Function (Mac Results)', () => {
  it('should return Mac when platform is \'Macintosh\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Macintosh', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('Mac');
  });

  it('should return Mac when platform is \'MacIntel\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacIntel', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('Mac');
  });

  it('should return Mac when platform is \'MacPPC\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacPPC', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('Mac');
  });

  it('should return Mac when platform is \'Mac68K\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Mac68K', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('Mac');
  });

  it('should return Mac when platform contains \'Mac\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Mac New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('Mac');
  });
});