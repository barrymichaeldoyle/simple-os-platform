import getOS from '~/get-os';

export const isIOS = () => getOS() === 'iOS';
export const isNotIOS = () => getOS() !== 'iOS';
