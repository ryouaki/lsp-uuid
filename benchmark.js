let now = Date.now()
let data = Date.now()

for (let i = 0; i < 10000 * 10000; i++) {
  data.toString(16)
}
console.log(Date.now() - now)
function trans(x) {

}
now = Date.now()
let n = data;
let m = []
for (let i = 0; i < 10000 * 10000; i++) {
  while(n > 0) {
    let a = n % 16;
    n = (n - a)/16;
    switch(a) {
      case 10:
        m.push('A');
        break;
      case 11:
        m.push('B');
        break;
      case 12:
        m.push('C');
        break;
      case 13:
        m.push('D');
        break;
      case 14:
        m.push('E');
        break;
      case 15:
        m.push('F');
        break;
      default:
        m.push(a + '')
    }
  }
}
console.log(Date.now() - now)

console.log(data.toString(16), m.reverse().join(''))