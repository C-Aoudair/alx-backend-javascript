export default function handerResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error)
    .finally(() => console.log('Got a response from the API'));
}
