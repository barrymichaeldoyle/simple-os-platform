import getOS from '~/get-os';

describe('Get OS Function (iOS Results)', () => {
  it('should return iOS when platform is \'iPad\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'iPad Simulator\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad Simulator', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'iPhone\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'iPhone Simulator\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone Simulator', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'Pike v7.6 release 92\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pike v7.6 release 92', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'Pike v7.8 release 517\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'Pike v7.8 release 517', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'iPod\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform is \'iPod Simulator\'', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod Simulator', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform contains \'iPad\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPad New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform contains \'iPhone\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPhone New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });

  it('should return iOS when platform contains \'iPod\' keyword', () => {
    Object.defineProperty(window.navigator, 'platform', {
      value: 'iPod New', writable: true
    });
    expect(getOS(window.navigator.platform)).toEqual('iOS');
  });
});