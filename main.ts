basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        basic.showString("Heat")
    } else {
        basic.showString("Cold")
    }
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("A F E F D G E F ", 110), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A F E F D G E F ", 110), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A F E F D G E F ", 110), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A F E F D G E F ", 110), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A F E F D G E F ", 110), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G B G E G C5 G A ", 450), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
