// Step Counter

// micro:bit template code increases step by 1 each shake
input.onGesture(Gesture.Shake, function () {
    steps += 1
    miles += steps / 2000
    if (steps == 10000) {  // plays a tone when user reaches 10,000 steps
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})

// if B pressed, miles travelled is displayed
input.onButtonPressed(Button.B, function () {
    basic.showString(" MI:")
    basic.showNumber(miles)
})

let miles = 0
let steps = 0
steps = 0

// prompts user to press B to display miles
basic.showString("Press B for Miles")

// always shows step count
basic.forever(function () {
    basic.showNumber(steps)
})
