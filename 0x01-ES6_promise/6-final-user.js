import createUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([createUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const myResults = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          myResults.push(
            {
              status: result.status,
              value: result.value,
            },
          );
        } else {
          myResults.push(
            {
              status: result.status,
              value: String(result.reason),
            },
          );
        }
      });
      return myResults;
    });
}


