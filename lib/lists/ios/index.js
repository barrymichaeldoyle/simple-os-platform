// List for iOS

export const iPadList = [
  'iPad', // (2010)
  'iPad Simulator', // simulator shipped with Xcode
];

export const iPhoneList = [
  'iPhone', // (2007)
  'iPhone Simulator', // simulator shipped with Xcode
  'Pike v7.6 release 92', // Opera Mini 5 on any iPhone (2009)
  'Pike v7.8 release 517', // Opera Mini 7 on any iPhone (2012)
];

export const iPodList = [
  'iPod', // (2007)
  'iPod Simulator', // simulator shipped with Xcode
];

export const containsIOSKeywords = platform =>
  platform.includes('iPad') ||
  platform.includes('iPhone') ||
  platform.includes('iPod') ||
  platform.includes('Pike');

export default [
  ...iPadList,
  ...iPhoneList,
  ...iPodList,
];
