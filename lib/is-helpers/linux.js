import getOS from '~/get-os';

export const isLinux = () => getOS() === 'Linux';
export const isNotLinux = () => getOS() !== 'Linux';
