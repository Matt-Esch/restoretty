var test = require("tape")

var restoretty = require("../index")

test("restoretty is a function", function (assert) {
    assert.equal(typeof restoretty, "function")
    assert.end()
})
