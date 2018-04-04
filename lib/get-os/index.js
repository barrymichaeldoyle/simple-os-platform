import {
  androidList, containsAndroidKeywords,
  blackBerryList, containsBlackBerryKeywords,
  firefoxOSList, // No Firefox keywords to match
  freeBSDList, containsFreeBSDKeywords,
  iOSList, containsIOSKeywords,
  linuxList, containsLinuxKeywords,
  macList, containsMacKeywords,
  nintendoList, containsNintendoKeywords,
  openBSDList, containsOpenBSDKeywords,
  palmList, containsPalmKeywords,
  playStationList, containsPlayStationKeywords,
  sunOSList, containsSunOSKeywords,
  symbianList, containsSymbianKeywords,
  windowsList, containsWindowsKeywords,
  // No need to import otherList since we'll just return their values anyway.
  // It's only there as a reference.
} from '~/lists';

export const getOS = () => {
  // eslint-disable-next-line no-undef
  const { window: { navigator: { platform } } } = global;

  if (androidList.includes(platform)) return 'Android';
  if (blackBerryList.includes(platform)) return 'BlackBerry';
  if (firefoxOSList.includes(platform)) return 'FirefoxOS';
  if (freeBSDList.includes(platform)) return 'FreeBSD';
  if (iOSList.includes(platform)) return 'iOS';
  if (linuxList.includes(platform)) return 'Linux';
  if (macList.includes(platform)) return 'Mac';
  if (nintendoList.includes(platform)) return 'Nintendo';
  if (openBSDList.includes(platform)) return 'OpenBSD';
  if (palmList.includes(platform)) return 'Palm';
  if (playStationList.includes(platform)) return 'PlayStation';
  if (sunOSList.includes(platform)) return 'SunOS';
  if (symbianList.includes(platform)) return 'Symbian';
  if (windowsList.includes(platform)) return 'Windows';

  if (containsAndroidKeywords(platform)) return 'Android';
  if (containsBlackBerryKeywords(platform)) return 'BlackBerry';
  // No Firefox keywords to match
  if (containsFreeBSDKeywords(platform)) return 'FreeBSD';
  if (containsIOSKeywords(platform)) return 'iOS';
  if (containsLinuxKeywords(platform)) return 'Linux';
  if (containsMacKeywords(platform)) return 'Mac';
  if (containsNintendoKeywords(platform)) return 'Nintendo';
  if (containsOpenBSDKeywords(platform)) return 'OpenBSD';
  if (containsPalmKeywords(platform)) return 'Palm';
  if (containsPlayStationKeywords(platform)) return 'PlayStation';
  if (containsSunOSKeywords(platform)) return 'SunOS';
  if (containsSymbianKeywords(platform)) return 'Symbian';
  if (containsWindowsKeywords(platform)) return 'Windows';

  return platform;
};

export * from '~/is-helpers';

export default getOS;
