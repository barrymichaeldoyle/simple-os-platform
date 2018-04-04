import getOS from '~/get-os';

export const isFirefoxOS = () => getOS() === 'FirefoxOS';
export const isNotFirefoxOS = () => getOS() !== 'FirefoxOS';
