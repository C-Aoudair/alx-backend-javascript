export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';

  const newString = [];
  set.forEach((myString) => {
    if (myString.startsWith(startString) && typeof myString === 'string') {
      newString.push(myString.substring(startString.length));
    }
  });
  return newString.join('-');
}
