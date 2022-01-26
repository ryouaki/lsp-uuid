function int2Hex(t) {
  let n = t;
  let m = '';
  while(n > 0) {
      let a = n % 16;
      n = (n - a)/16;
      switch(a) {
        case 10:
          m += 'a';
          break;
        case 11:
          m += 'b';
          break;
        case 12:
          m += 'c';
          break;
        case 13:
          m += 'd';
          break;
        case 14:
          m += 'e';
          break;
        case 15:
          m += 'f';
          break;
        default:
          m += a + '';
      }
  }
  return m;
}

function hex2Int(hex) {
  let len = hex.length
  let a = new Array(len)
  let code = '';
  for (let i = 0; i < len; i++) {
      code = hex.charCodeAt(i);
      if (48<=code && code < 58) {
          code -= 48;
      } else {
          code = (code & 0xdf) - 65 + 10;
      }
      a[i] = code;
  }
   
  return a.reduce(function(acc, c) {
      acc = 16 * acc + c;
      return acc;
  }, 0);
}

function leftZero(src, size) {
  let target = ''
  for (let i = 0; i < size; i++) {
      target += '0'
  }
  return target + src
}

module.exports = {
  int2Hex,
  hex2Int,
  leftZero
}