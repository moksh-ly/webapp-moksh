var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
var bullets;
var shootKey;
var lastFired = 0;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('bullet', 'https://labs.phaser.io/assets/sprites/bullet.png');
}

function create() {
    player = this.physics.add.sprite(400, 500, 'player');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10
    });
}

function update(time, delta) {
    // Player movement
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    }
