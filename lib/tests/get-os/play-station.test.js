/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (PlayStation Results)', () => {
  it('should return PlayStation when platform is \'PLAYSTATION 3\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PLAYSTATION 3', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform is \'PlayStation 4\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PlayStation 4', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform is \'SunOS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PSP', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform contains \'PlayStation\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PlayStation New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform contains \'PSP\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'PSP New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('PlayStation');
  });
});