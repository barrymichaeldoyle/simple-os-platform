import getOS from '~/get-os';

export const isSymbian = () => getOS() === 'Symbian';
export const isNotSymbian = () => getOS() !== 'Symbian';
