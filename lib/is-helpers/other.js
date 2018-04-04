import getOS from '~/get-os';

const registeredOSList = [
  'Android',
  'BlackBerry',
  'FirefoxOS',
  'FreeBSD',
  'iOS',
  'Linux',
  'Mac',
  'Nintendo',
  'Node',
  'OpenBSD',
  'Palm',
  'PlayStation',
  'SunOS',
  'Symbian',
  'Windows',
];

export const isOther = () => registeredOSList.includes(getOS());
export const isNotOther = () => !registeredOSList.includes(getOS());
