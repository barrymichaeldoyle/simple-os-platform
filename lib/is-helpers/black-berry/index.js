import { getOS } from '~/get-os';

export const isBlackBerry = () => getOS() === 'BlackBerry';
export const isNotBlackBerry = () => getOS() !== 'BlackBerry';
