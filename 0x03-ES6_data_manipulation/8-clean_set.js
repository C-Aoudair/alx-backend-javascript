export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';

  const newString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newString.push(value.substring(startString.length));
    }
  });
  return newString.join('-');
}
