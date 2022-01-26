const { expect } = require('@jest/globals');
const { uuid, parse } = require('./../index');

describe("uuid test", () => {
    it("Generate test 1", () => {
        expect(uuid()).toHaveLength(15)
    })

    it("Generate test 2", () => {
        expect(uuid(Date.now())).toHaveLength(15)
    })

    if("Arguments test", () => {
        try {
            uuid("111")
        } catch(e) {
            expect(e.message).toBe('St must be a Number!')
        }
    })
    
    it("parse test 3", () => {
        const target = parse(uuid())
        expect(target).not.toBe(undefined)
    })

    it("parse test 4", () => {
        const now = Date.now()
        let target = parse(uuid(now))
        expect(target).not.toBe(undefined)
        expect(target.flg).toBe(0)
        expect(target.timestamp).toBe(now)
    })
})