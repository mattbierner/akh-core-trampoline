/**
 * Super basic trampoline for tail calls.
 */
"use strict"

/**
 * Create a tail call.
 */
module.exports.tail = (f, x) => ({
    f: f,
    x: x,
    __akhIsTail: true
})

/**
 * Invoke `f` to completion by invoking all tail calls it returns.
 */
module.exports.trampoline = f => {
    var value = f
    while (value && value.__akhIsTail)
        value = value.f(value.x)
    return value
}
