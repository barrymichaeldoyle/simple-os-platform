import getOS from '~/get-os';

export const isPlayStation = () => getOS() === 'PlayStation';
export const isNotPlayStation = () => getOS() !== 'PlayStation';
