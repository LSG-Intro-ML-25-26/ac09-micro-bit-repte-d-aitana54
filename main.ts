basic.forever(function () {
    let temperature = 0
    if (temperature > 22) {
        basic.showString("Heat")
    } else {
        basic.showString("Cold")
    }
})
