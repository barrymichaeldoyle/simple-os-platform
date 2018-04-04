/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Linux Results)', () => {
  it('should return Linux when platform is \'Linux\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux aarch64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux aarch64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux arm5tejl\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux arm5tejl', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux armv6l\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux armv6l', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux armv7l\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux armv7l', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux i686\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux i686', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux i686 on x86_64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux i686 on x86_64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux i686 X11\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux i686 X11', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux MSM8960_v3.2.1.1_N_R069_Rev:18\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux MSM8960_v3.2.1.1_N_R069_Rev:18', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux ppc64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux ppc64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux x86_64\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux x86_64', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform is \'Linux x86_64 X11\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux x86_64 X11', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });

  it('should return Linux when platform contains \'Linux\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Linux New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Linux');
  });
});