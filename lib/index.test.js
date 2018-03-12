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
  // TODO: Implement Mac Tests

  // Nintendo List
  // TODO: Implement Nintendo Tests

  // OpenBSD List
  // TODO: Implement OpenBSD Tests

  // Palm List
  // TODO: Implement Palm Tests

  // PlayStation List
  // TODO: Implement PlayStation Tests

  // SunOS List
  // TODO: Implement SunOS Tests

  // Symbian List
  // TODO: Implement Symbian Tests

  // Windows List
  // TODO: Implement Windows Tests

  // No List, Not containing Keyword
  it(`should return the platform value if none of the cases above occur`, () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Something Unlisted', writable: true });
    const { navigator: { platform } } = window;
    expect(getOS(platform)).toEqual('Something Unlisted');
  });
});
