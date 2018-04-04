import getOS from '~/get-os';

export const isWindows = () => getOS() === 'Windows';
export const isNotWindows = () => getOS() !== 'Windows';
