import { getOS } from '~/get-os';

export const isOther = () => getOS() === 'Other';
export const isNotOther = () => getOS() !== 'Other';
