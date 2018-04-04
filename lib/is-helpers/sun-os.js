import getOS from '~/get-os';

export const isSunOS = () => getOS() === 'SunOS';
export const isNotSunOS = () => getOS() !== 'SunOS';
