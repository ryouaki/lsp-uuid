const BASE_LENGTH = 11
const COUNT_LENGTH = 4

function int2Hex(t) {
    let n = t;
    const m = [];
    while(n > 0) {
        let a = n % 16;
        n = (n - a)/16;
        switch(a) {
          case 10:
            m.push('a');
            break;
          case 11:
            m.push('b');
            break;
          case 12:
            m.push('c');
            break;
          case 13:
            m.push('d');
            break;
          case 14:
            m.push('e');
            break;
          case 15:
            m.push('f');
            break;
          default:
            m.push(a + '');
        }
    }
    return m.reverse().join('');
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

let count = 0
let lastTime = 0

function uuid(st) {
    let now = (st !== undefined) ? st : Date.now();
    if (typeof now != 'number') {
        throw new Error('St must be a Number!')
    }
    let n = int2Hex(now);

    if (n.length < BASE_LENGTH) {
        n = leftZero(n, BASE_LENGTH)
    }

    let c = int2Hex(count)
    if (c.length < COUNT_LENGTH) {
        c = leftZero(c, COUNT_LENGTH - c.length)
    }

    count++
    if ((now - lastTime) >= 1000 || count >= 65535) {
        lastTime = now
        count = 0
    }

    return n + c
}

function parseUUID(uuid) {
    const st = uuid.substr(0, BASE_LENGTH)
    const ct = uuid.substr(BASE_LENGTH, COUNT_LENGTH)

    return {
        flg: 0,
        timestamp: hex2Int(st),
        count: hex2Int(ct)
    }
}

module.exports = {
    uuid: uuid,
    parseUUID: parseUUID
}
