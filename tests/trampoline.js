"use strict";
const assert = require('chai').assert
const tramp = require('../index')


describe("Trampoline", () => {
    it("should return value if value is not a tail call", () => {
        assert.strictEqual(9, tramp.trampoline(9))
        assert.strictEqual(null, tramp.trampoline(null))

        var f = function() { };
        assert.strictEqual(f, tramp.trampoline(f))
    })

    it("should invoke single tail call", () => {
        assert.strictEqual(9, tramp.trampoline(tramp.tail(() => 9)))
        assert.strictEqual(9, tramp.trampoline(tramp.tail((x) => x, 9)))
    })

    it("should invoke multiple tail calls", () => {
        var count = (start, end) => {
            if (start >= end)
                return start;
            return tramp.tail(() => count(start + 1, end));
        }

        assert.strictEqual(99, tramp.trampoline(count(0, 99)))
        assert.strictEqual(99999, tramp.trampoline(count(0, 99999)))
    })
})