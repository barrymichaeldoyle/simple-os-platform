// List for Android

export const containsAndroidKeywords = platform =>
  platform.includes('Android');

export default [
  'Android', // (2008)
  null, // In rare cases, Android devices can return null or undefined,
  undefined,
];

// Note: Android phone browsers will sometimes return Linux too.
