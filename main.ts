input.onButtonPressed(Button.A, function () {
    radio.sendString("Ahoj")
    led.toggle(0, 0)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    led.toggle(2, 2)
})
radio.setGroup(1)
