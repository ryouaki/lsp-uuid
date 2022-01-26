const { uuid } = require('./index')
const { int2Hex, leftZero } = require('./utils')

function getAddr () {
    const ni = require('os').networkInterfaces();
    for (let key in ni) {
        for (let i = 0; i < ni[key].length; i++) {
            if (ni[key][i].family === 'IPv4' && !ni[key][i].internal && ni[key][i].address !== '127.0.0.1') {
                return ni[key][i].address.split('.').map((ip) => {
                    const i = int2Hex(+ip) + ''
                    return leftZero(i, 2 - i.length )
                })
            }
        }
    }
}

const address = getAddr().join('')
const pid = int2Hex(process.pid)

function s_uuid() {
    const uid = uuid();
    return uid + '-' + address + '-' + pid
}

module.exports.s_uuid = s_uuid
