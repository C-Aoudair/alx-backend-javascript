import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return { photo, user };
  } catch (err) {
    return { user: null, photo: null };
  }
}
