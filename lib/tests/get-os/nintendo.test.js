/* eslint-disable no-undef */
import getOS from '~/get-os';

describe('Get OS Function (Nintendo Results)', () => {
  it('should return Nintendo when platform is \'New Nintendo 3DS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'New Nintendo 3DS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo DSi\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nintendo DSi', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo 3DS\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nintendo 3DS', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo Wii\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nintendo Wii', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo WiiU\'', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nintendo WiiU', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform contains \'Nintendo\' keyword', () => {
    Object.defineProperty(global.window.navigator, 'platform', {
      value: 'Nintendo New', writable: true
    });
    expect(getOS(global.window.navigator.platform)).toEqual('Nintendo');
  });
});