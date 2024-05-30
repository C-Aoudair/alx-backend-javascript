export default function getFullResponseFromAPI (success) {
  const myPromise = new Promise(function (resolve, reject) {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });

  return myPromise;
}
