import { getOS } from '~/get-os';

export const isMac = () => getOS() === 'Mac';
export const isNotMac = () => getOS() !== 'Mac';
