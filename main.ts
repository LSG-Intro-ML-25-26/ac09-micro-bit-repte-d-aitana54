basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        basic.showString("Heat")
    } else {
        basic.showString("Cold")
    }
})
