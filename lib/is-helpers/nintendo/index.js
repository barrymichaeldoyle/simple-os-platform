import { getOS } from '~/get-os';

export const isNintendo = () => getOS() === 'Nintendo';
export const isNotNintendo = () => getOS() !== 'Nintendo';
