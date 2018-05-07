var sum = (a, b) => {
  return a + b;
}

var promise = new promise((resolve, reject) => {
  setInterval(()=>{
    resolve(123)
  },100)
})

promise.then(
  (a)=>{
    console.log(a);
  }
)


sum(1,2);