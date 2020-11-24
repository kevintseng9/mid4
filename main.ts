basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let J = 0; J <= 4; J++) {
            led.plot(2, I)
            led.plot(I, 2)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
