import { getOS } from '~/get-os';

export const isPalm = () => getOS() === 'Palm';
export const isNotPalm = () => getOS() !== 'Palm';
