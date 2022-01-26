const { int2Hex, hex2Int, leftZero } = require('./utils')

const BASE_LENGTH = 11
const COUNT_LENGTH = 4
const COUNT_MAX = 65535 // 0xffff

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
    if (now === lastTime && count > COUNT_MAX) {
        throw new Error('Overstep the limits')
    } else if ((now - lastTime) >= 1000 || count >= COUNT_MAX) {
        lastTime = now
        count = 0
    }

    return n + c
}

function parse(uuid) {
    const st = uuid.substr(0, BASE_LENGTH).split('').reverse().join('')
    const ct = uuid.substr(BASE_LENGTH, COUNT_LENGTH)


    return {
        flg: 0,
        timestamp: hex2Int(st),
        count: hex2Int(ct)
    }
}

module.exports = {
    uuid: uuid,
    parse: parse
}
