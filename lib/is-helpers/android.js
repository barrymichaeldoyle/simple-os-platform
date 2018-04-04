import getOS from '~/get-os';

export const isAndroid = () => getOS() === 'Android';
export const isNotAndroid = () => getOS() !== 'Android';
