import getOS from './';

describe('Get OS Function', () => {
  // Android List
  it('should return Android when platform is "Android"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Android', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Android');
  });
  it('should return Android when platform is null', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: null, writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Android');
  });
  it('should return Android when platform is undefined', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: undefined, writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Android');
  });
  it('should return Android when platform contains "Android" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Android New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Android');
  });

  // BlackBerry List
  it('should return BlackBerry when platform is "BlackBerry"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'BlackBerry', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('BlackBerry');
  });
  it('should return BlackBerry when platform contains "BlackBerry" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'BlackBerry New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('BlackBerry');
  });

  // Firefox OS List
  it('should return Firefox OS when platform is ""', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: '', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Firefox OS');
  });

  // FreeBSD List
  it('should return FreeBSD when platform is "FreeBSD"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('FreeBSD');
  });
  it('should return FreeBSD when platform is "FreeBSD i386"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD i386', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('FreeBSD');
  });
  it('should return FreeBSD when platform is "FreeBSD amd64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD amd64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('FreeBSD');
  });
  it('should return FreeBSD when platform contains "FreeBSD" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'FreeBSD New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('FreeBSD');
  });

  // iOS List
  it('should return iOS when platform is "iPad"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "iPad Simulator"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad Simulator', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "iPhone"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "iPhone Simulator"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone Simulator', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "Pike v7.6 release 92"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pike v7.6 release 92', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "Pike v7.8 release 517"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pike v7.8 release 517', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "iPod"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform is "iPod Simulator"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod Simulator', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform contains "iPad" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform contains "iPhone" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });
  it('should return iOS when platform contains "iPod" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('iOS');
  });

  // Linux List
  it('should return Linux when platform is "Linux"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux aarch64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux aarch64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux arm5tejl"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux arm5tejl', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux armv6l"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux armv6l', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux armv7l"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux armv7l', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux i686"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux i686', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux i686 on x86_64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux i686 on x86_64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux i686 X11"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux i686 X11', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux MSM8960_v3.2.1.1_N_R069_Rev:18"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux MSM8960_v3.2.1.1_N_R069_Rev:18', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux ppc64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux ppc64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux x86_64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux x86_64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform is "Linux x86_64 X11"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux x86_64 X11', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });
  it('should return Linux when platform contains "Linux" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Linux New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Linux');
  });

  // Mac List
  it('should return Mac when platform is "Macintosh"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Macintosh', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Mac');
  });
  it('should return Mac when platform is "MacIntel"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacIntel', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Mac');
  });
  it('should return Mac when platform is "MacPPC"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'MacPPC', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Mac');
  });
  it('should return Mac when platform is "Mac68K"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Mac68K', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Mac');
  });
  it('should return Mac when platform contains "Mac" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Mac New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Mac');
  });


  // Nintendo List
  it('should return Nintendo when platform is "New Nintendo 3DS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'New Nintendo 3DS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });
  it('should return Nintendo when platform is "Nintendo DSi"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo DSi', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });
  it('should return Nintendo when platform is "Nintendo 3DS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo 3DS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });
  it('should return Nintendo when platform is "Nintendo Wii"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo Wii', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });
  it('should return Nintendo when platform is "Nintendo WiiU"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo WiiU', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });
  it('should return Nintendo when platform contains "Nintendo" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nintendo New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Nintendo');
  });

  // OpenBSD List
  it('should return OpenBSD when platform is "OpenBSD amd64"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OpenBSD amd64', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('OpenBSD');
  });
  it('should return OpenBSD when platform contains "OpenBSD" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OpenBSD New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('OpenBSD');
  });

  // Palm List
  it('should return Palm when platform is "PalmOS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PalmOS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Palm');
  });
  it('should return Palm when platform is "webOS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'webOS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Palm');
  });
  it('should return Palm when platform contains "Palm" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Palm New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Palm');
  });

  // PlayStation List
  it('should return PlayStation when platform is "PLAYSTATION 3"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PLAYSTATION 3', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('PlayStation');
  });
  it('should return PlayStation when platform is "PlayStation 4"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PlayStation 4', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('PlayStation');
  });
  it('should return PlayStation when platform is "SunOS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PSP', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('PlayStation');
  });
  it('should return PlayStation when platform contains "PlayStation" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PlayStation New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('PlayStation');
  });
  it('should return PlayStation when platform contains "PSP" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'PSP New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('PlayStation');
  });

  // SunOS List
  it('should return SunOS when platform is "SunOS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('SunOS');
  });
  it('should return SunOS when platform is "SunOS i86pc"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS i86pc', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('SunOS');
  });
  it('should return SunOS when platform is "SunOS sun4u"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS sun4u', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('SunOS');
  });
  it('should return SunOS when platform contains "SunOS" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'SunOS New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('SunOS');
  });

  // Symbian List
  it('should return Symbian when platform is "Nokia_Series_40"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Nokia_Series_40', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Symbian');
  });
  it('should return Symbian when platform is "S60"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'S60', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Symbian');
  });
  it('should return Symbian when platform is "Symbian"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Symbian');
  });
  it('should return Symbian when platform is "Symbian OS"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian OS', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Symbian');
  });
  it('should return Symbian when platform contains "Symbian" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Symbian New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Symbian');
  });

  // Windows List
  it('should return Windows when platform is "OS/2"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'OS/2', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform is "Pocket PC"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pocket PC', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform is "Windows"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Windows', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform is "Win16"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Win16', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform is "Win32"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Win32', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform is "WinCE"', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'WinCE', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });
  it('should return Windows when platform contains "Windows" keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Windows New', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Windows');
  });

  // No List, Not containing Keyword
  it(`should return the platform value if none of the cases above occur`, () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Something Unlisted', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Something Unlisted');
  });
});
