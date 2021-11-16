// const {uuid} = require('./index');

// let now = Date.now()

// for (let i = 0; i < 10000 * 10000; i++) {
//   uuid()
// }

// console.log(Date.now() - now)


function NtoB(t) {
  let arr = ''
  let n = t

  while (n > 0) {
    let o = n % 2
    arr += o
    if (n > 2000000000) {
      n = n / 2
    } else {
      n = n >> 1
    }
  }

  return arr
}

let now1 = Date.now()
for (let i = 0; i < 1000*1000; i++) {
  NtoB(Date.now())
}
console.log(Date.now() - now1)

let now = Date.now()
for (let i = 0; i < 1000*1000; i++) {
  Number(Date.now()).toString(2)
}
console.log(Date.now() - now)

console.log(NtoB(now), Number(now).toString(2))
// console.log(Number(t).toString(2))
// console.log()