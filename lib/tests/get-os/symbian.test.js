/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Symbian Results)', () => {
  it('should return Symbian when platform is \'Nokia_Series_40\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nokia_Series_40', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'S60\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'S60', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'Symbian\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Symbian', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'Symbian OS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Symbian OS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform contains \'Symbian\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Symbian New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Symbian');
  });
});