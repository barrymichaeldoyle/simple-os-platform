import { getOS } from '~/get-os';

export const isFreeBSD = () => getOS() === 'FreeBSD';
export const isNotFreeBSD = () => getOS() !== 'FreeBSD';
