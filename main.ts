input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.South)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Sword)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Sword)
    if (Math.randomBoolean()) {
        basic.showString("TESTA")
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showString("CROCE")
        basic.showIcon(IconNames.Sword)
    }
})
