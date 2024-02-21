const fnAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Async!!'), 2000);
    // reject(new Error('Error!!'));
  });
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);

  console.log('Hello World!');
}

console.log('Before');
anotherFn();
console.log('After');