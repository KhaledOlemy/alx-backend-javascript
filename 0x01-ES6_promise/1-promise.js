export default function getFullResponseFromAPI(output) {
  return new Promise((resolve, reject) => {
    if (output) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('Error: The fake API is not working currently'));
    }
  });
}
