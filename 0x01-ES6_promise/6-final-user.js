import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => (
      response.map((output) => ({
        status: output.status,
        value: output.status === 'fulfilled' ? output.value : String(output.reason),
      }))
    ));
}
