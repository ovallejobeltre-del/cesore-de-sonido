input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() < 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        pins.setAudioPin(DigitalPin.P0)
    } else if (input.soundLevel() < 150) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        pins.setAudioPin(DigitalPin.P1)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.setAudioPin(DigitalPin.P2)
    }
})
basic.showIcon(IconNames.Happy)
