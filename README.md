# restoretty

Turn off TTY raw mode

## Example

```js
var openTTY = require('opentty');
var restoreTTY = require('restoretty');

var tty = openTTY();

// quit on Q pressed
tty.on('data', function (d) {
    for (var i = 0; i < d.length; d++) {
        if (d[i] === 0x71) {
            restoreTTY();  // turn off raw mode
            return process.exit();
        }
    }
});
```

## Installation

`npm install restoretty`

## Contributors

 - Matt-Esch

## MIT Licenced
