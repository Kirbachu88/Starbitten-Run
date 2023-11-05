/***********************************************/
/* Author: Angela Ku
/* Title:  Endless Runner (WIP)
/* Time:   ?
/*
/* Citations
/* - Change Background Color in HTML - https://blog.hubspot.com/website/change-background-color-html
/* - Center game window - https://phaser.discourse.group/t/how-do-i-move-phaser-game-to-the-center-of-a-browser/8577/10
/* - Character prefab with physics - https://phaser.discourse.group/t/how-to-create-complex-reusable-game-objects/2997
/* - Character jumping - https://phasergames.com/how-to-jump-in-phaser-3/
/* - Check character is onFloor - https://phaser.discourse.group/t/how-to-catch-when-player-hit-the-ground-after-jump/2037
/* - Looping music - https://phasertutorials.com/creating-a-phaser-3-template-part-3/
/***********************************************/

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    width: 800,
    height: 600,
    scale: {autoCenter: Phaser.Scale.CENTER_BOTH},
    scene: [ Menu, Play ],
}

// Reserve keyboard vars
let cursors

let game = new Phaser.Game(config)

let { height, width } = game.config // Destructuring an object and assigning its properties to variables

// Set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// Functions that will be hoisted in JS

// Some initialization function that does some thing
function initFunction() {

}