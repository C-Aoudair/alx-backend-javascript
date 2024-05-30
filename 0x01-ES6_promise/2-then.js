export default function handerResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }, () => {
    console.log('Got a response from the API');
    return Error;
  });
}
