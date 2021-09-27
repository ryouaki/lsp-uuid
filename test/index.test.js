const { expect } = require('@jest/globals');
const { uuid, parseUUID } = require('./../index');

describe("uuid test", () => {
    it("Generate test 1", () => {
        expect(uuid()).toHaveLength(15)
    })

    it("Generate test 2", () => {
        expect(uuid(Date.now())).toHaveLength(15)
    })
    
    it("parseUUID test 3", () => {
        const target = parseUUID(uuid())
        expect(target).not.toBe(undefined)
    })

    it("parseUUID test 4", () => {
        const now = Date.now()
        let target = parseUUID(uuid(now))
        expect(target).not.toBe(undefined)
        expect(target.flg).toBe(0)
        expect(target.timestamp).toBe(now)
    })
})