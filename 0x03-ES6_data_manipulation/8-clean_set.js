export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || !(typeof startString === 'string')) {
    return '';
  }
  const outputArray = [];
  for (const item of set.values()) {
    if (item.startsWith(startString)) {
      const subStr = item.substring(startString.length);
      if (subStr && subStr !== item) {
        outputArray.push(subStr);
      }
    }
  }
  return outputArray.join('-');
}
