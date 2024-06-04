export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || !(set instanceof Set)) return '';

  const newString = [];
  set.forEach((myString) => {
    if (myString.startsWith(startString) && typeof myString === 'string') {
      newString.push(myString.slice(startString.length));
    }
  });
  return newString.join('-');
}
