export function uploadPhoto() {
  return Promise.reject({
    status: 200,
    body: 'photo-profile'
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
