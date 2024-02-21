// Example 1
const promise = new Promise((resolve, reject) => {
  resolve('That\'s fine!')
});

// Example 2
const cows = 8;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There are not enough cows on the farm');
  }
});

countCows.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
}).finally(() => console.log('Finally'));