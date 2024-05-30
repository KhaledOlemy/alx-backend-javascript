import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const p = await uploadPhoto();
    const u = await createUser();
    result = { p, u };
  } catch (err) {
    result = { photo: null, user: null };
  }
  return result;
}
