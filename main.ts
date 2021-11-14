music.setVolume(200)
let tone = 262
let beat = music.beat(BeatFraction.Breve)
let distance = 0
basic.forever(function () {
    distance = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    distance,
    500
    )
    if (distance > 400) {
        beat = music.beat(BeatFraction.Breve)
    } else if (distance > 300) {
        beat = music.beat(BeatFraction.Double)
    } else if (distance > 200) {
        beat = music.beat(BeatFraction.Whole)
    } else if (distance > 100) {
        beat = music.beat(BeatFraction.Half)
    } else {
        beat = music.beat(BeatFraction.Eighth)
    }
    music.playTone(tone, music.beat(BeatFraction.Whole))
    music.rest(beat)
})
