process.stdin.on('data', (data) => {
  console.log("hello from the process Object")
  console.log(data);
  console.log(`Thanks for the data: ${data.toString().toUpperCase()}`);
})
