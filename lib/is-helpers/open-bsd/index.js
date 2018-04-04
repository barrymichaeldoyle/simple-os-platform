import { getOS } from '~/get-os';

export const isOpenBSD = () => getOS() === 'OpenBSD';
export const isNotOpenBSD = () => getOS() !== 'OpenBSD';
