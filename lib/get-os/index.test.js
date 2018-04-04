import getOS from './';

describe('Get OS Function', () => {
  // Nintendo List
  it('should return Nintendo when platform is \'New Nintendo 3DS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'New Nintendo 3DS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo DSi\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo DSi', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo 3DS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo 3DS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo Wii\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo Wii', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform is \'Nintendo WiiU\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo WiiU', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  it('should return Nintendo when platform contains \'Nintendo\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Nintendo');
  });

  // OpenBSD List
  it('should return OpenBSD when platform is \'OpenBSD amd64\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OpenBSD amd64', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('OpenBSD');
  });

  it('should return OpenBSD when platform contains \'OpenBSD\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OpenBSD New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('OpenBSD');
  });

  // Palm List
  it('should return Palm when platform is \'PalmOS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PalmOS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Palm');
  });

  it('should return Palm when platform is \'webOS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'webOS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Palm');
  });

  it('should return Palm when platform contains \'Palm\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Palm New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Palm');
  });

  // PlayStation List
  it('should return PlayStation when platform is \'PLAYSTATION 3\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PLAYSTATION 3', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform is \'PlayStation 4\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PlayStation 4', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform is \'SunOS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PSP', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform contains \'PlayStation\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PlayStation New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('PlayStation');
  });

  it('should return PlayStation when platform contains \'PSP\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PSP New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('PlayStation');
  });

  // SunOS List
  it('should return SunOS when platform is \'SunOS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform is \'SunOS i86pc\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS i86pc', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform is \'SunOS sun4u\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS sun4u', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('SunOS');
  });

  it('should return SunOS when platform contains \'SunOS\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('SunOS');
  });

  // Symbian List
  it('should return Symbian when platform is \'Nokia_Series_40\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nokia_Series_40', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'S60\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'S60', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'Symbian\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform is \'Symbian OS\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian OS', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Symbian');
  });

  it('should return Symbian when platform contains \'Symbian\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Symbian');
  });

  // Windows List
  it('should return Windows when platform is \'OS/2\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OS/2', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Pocket PC\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pocket PC', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Windows\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Windows', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Win16\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Win16', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'Win32\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Win32', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform is \'WinCE\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'WinCE', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  it('should return Windows when platform contains \'Windows\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Windows New', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Windows');
  });

  // No List, Not containing Keyword
  it(`should return the platform value if none of the cases above occur`, () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Something Unlisted', writable: true });
    expect(getOS(window.navigator.platform)).toEqual('Something Unlisted');
  });
});
