const { uuid } = require('./index')

function uuid1() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function uuid2() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

function uuid3() {
  function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function uuid4(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [],
      i;
  radix = radix || chars.length;

  if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
      var r;

      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
              r = 0 | Math.random() * 16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
      }
  }

  return uuid.join('');
}

let now = Date.now()
for (let i = 0; i < 10000 * 10000; i++) {
  uuid()
}
console.log('uuid', Date.now() - now, uuid())

now = Date.now()
for (let i = 0; i < 10000 * 10000; i++) {
  uuid1()
}
console.log('uuid1', Date.now() - now, uuid1())

now = Date.now()
for (let i = 0; i < 10000 * 10000; i++) {
  uuid2()
}
console.log('uuid2', Date.now() - now, uuid2())

now = Date.now()
for (let i = 0; i < 10000 * 10000; i++) {
  uuid3()
}
console.log('uuid3', Date.now() - now, uuid3())

now = Date.now()
for (let i = 0; i < 10000 * 10000; i++) {
  uuid4(16, 16)
}
console.log('uuid4', Date.now() - now, uuid4(16,16))