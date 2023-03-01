function hazardDetection () {
    collision = JoyCar.collisionDetection()
    if (collision) {
        JoyCar.hazardlights(ToggleSwitch.On)
    } else {
        basic.showIcon(IconNames.Heart)
    }
}
let collision = 0
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.NorthEast)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.SouthEast)
basic.showArrow(ArrowNames.South)
basic.showArrow(ArrowNames.SouthWest)
basic.showArrow(ArrowNames.West)
basic.showArrow(ArrowNames.NorthWest)
basic.forever(function () {
    hazardDetection()
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    JoyCar.hazardlights(ToggleSwitch.Off)
})
