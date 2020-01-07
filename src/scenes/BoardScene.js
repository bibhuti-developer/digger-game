import { CONST } from "../config/constant";

export class BoardScene extends Phaser.Scene {
  constructor() {
    super({
      key: CONST.SCENES.BOARD
    });
  }

  preload() {
    this.load.image("terrain_atlas", "../assets/tiles/terrain_atlas.png");
    this.load.tilemapTiledJSON("map", "../assets/tiles/platform.json");
    this.load.atlas(
      "dinoSprite",
      "../assets/sprite/dino-sprites.png",
      "../assets/sprite/dino-sprites.json"
    );
    this.load.atlasXML(
      "coinSprite",
      "../assets/sprite/coin-sprites.png",
      "../assets/sprite/coin-sprites.xml"
    );

    this.load.image('brick', 'assets/image/brick.png');
  }

  create() {
    console.log("BoardScene- Create");
    this.input.enabled = true;
    this.coinCollected = 0;

    this.map = this.make.tilemap({
      key: "map",
      tileWidth: 32,
      tileHeight: 32
    });

    const tileset = this.map.addTilesetImage("terrain_atlas", "terrain_atlas");
    const backgroundLayer = this.map.createStaticLayer("background", tileset, 0, 0);
    const rockLayer = this.map.createStaticLayer("rock", tileset, 0, 0);

    // this.star1Object = this.map.createFromObjects("character", "star1", {key: "star" });

    // BRICK
    const brickFrames = [
      { x: 208, y: 368 },
      { x: 240, y: 368 },
      { x: 272, y: 368 },
      { x: 304, y: 368 },

      { x: 208, y: 240 },
      { x: 240, y: 240 },
      { x: 272, y: 240 },
      { x: 304, y: 240 },

      { x: 208, y: 112 },
      { x: 240, y: 112 },
      { x: 272, y: 112 },
      { x: 304, y: 112 },

      { x: 208-160, y: 112+64 },
      { x: 240-160, y: 112+64 },
      { x: 272-160, y: 112+64 },
      { x: 304-160, y: 112+64 },

      { x: 336, y: 144 },
      { x: 368, y: 144 },
      { x: 400, y: 144 },
      { x: 432, y: 144 },

      { x: 336+128, y: 208 },
      { x: 368+128, y: 208 },
      { x: 400+128, y: 208 },
      { x: 432+128, y: 208 },

      { x: 336+32, y: 208 + 96 },
      { x: 368+32, y: 208 + 96 },
      { x: 400+32, y: 208 + 96 },
      { x: 432+32, y: 208 + 96 },

      { x: 0*32+16, y: 464 },
      { x: 1*32+16, y: 464 },
      { x: 2*32+16, y: 464 },
      { x: 3*32+16, y: 464 },
      { x: 4*32+16, y: 464 },
      { x: 5*32+16, y: 464 },
      { x: 6*32+16, y: 464 },
      { x: 7*32+16, y: 464 },
      { x: 8*32+16, y: 464 },
      { x: 9*32+16, y: 464 },
      { x: 10*32+16, y: 464 },
      { x: 11*32+16, y: 464 },
      { x: 12*32+16, y: 464 },
      { x: 13*32+16, y: 464 },
      { x: 14*32+16, y: 464 },
      { x: 15*32+16, y: 464 },
      { x: 16*32+16, y: 464 },
      { x: 17*32+16, y: 464 },
      { x: 18*32+16, y: 464 },
      { x: 19*32+16, y: 464 },
      { x: 20*32+16, y: 464 }, 
      { x: 0*32+16, y: 16 },
      { x: 1*32+16, y: 16 },
      { x: 2*32+16, y: 16 },
      { x: 3*32+16, y: 16 },
      { x: 4*32+16, y: 16 },
      { x: 5*32+16, y: 16 },
      { x: 6*32+16, y: 16 },
      { x: 7*32+16, y: 16 },
      { x: 8*32+16, y: 16 },
      { x: 9*32+16, y: 16 },
      { x: 10*32+16, y: 16 },
      { x: 11*32+16, y: 16 },
      { x: 12*32+16, y: 16 },
      { x: 13*32+16, y: 16 },
      { x: 14*32+16, y: 16 },
      { x: 15*32+16, y: 16 },
      { x: 16*32+16, y: 16 },
      { x: 17*32+16, y: 16 },
      { x: 18*32+16, y: 16 },
      { x: 19*32+16, y: 16 },
      { x: 20*32+16, y: 16 },
      { x: 16, y:  0*32+16 },
      { x: 16, y:  1*32+16 },
      { x: 16, y:  2*32+16 },
      { x: 16, y:  3*32+16 },
      { x: 16, y:  4*32+16 },
      { x: 16, y:  5*32+16 },
      { x: 16, y:  6*32+16 },
      { x: 16, y:  7*32+16 },
      { x: 16, y:  8*32+16 },
      { x: 16, y:  9*32+16 },
      { x: 16, y: 10*32+16 },
      { x: 16, y: 11*32+16 },
      { x: 16, y: 12*32+16 },
      { x: 16, y: 13*32+16 },
      { x: 16, y: 14*32+16 },
      { x: 16, y: 15*32+16 },
      { x: 16, y: 16*32+16 },
      { x: 14, y: 17*32+16 },
      { x: 14, y: 18*32+16 },
      { x: 14, y: 19*32+16 },
      { x: 14, y: 20*32+16 },
      { x: 624, y:  0*32+16 },
      { x: 624, y:  1*32+16 },
      { x: 624, y:  2*32+16 },
      { x: 624, y:  3*32+16 },
      { x: 624, y:  4*32+16 },
      { x: 624, y:  5*32+16 },
      { x: 624, y:  6*32+16 },
      { x: 624, y:  7*32+16 },
      { x: 624, y:  8*32+16 },
      { x: 624, y:  9*32+16 },
      { x: 624, y: 10*32+16 },
      { x: 624, y: 11*32+16 },
      { x: 624, y: 12*32+16 },
      { x: 624, y: 13*32+16 },
      { x: 624, y: 14*32+16 },
      { x: 624, y: 15*32+16 },
      { x: 624, y: 16*32+16 },
      { x: 624, y: 17*32+16 },
      { x: 624, y: 18*32+16 },
      { x: 624, y: 19*32+16 },
      { x: 624, y: 20*32+16 },            
    ];

    this.platforms = this.physics.add.staticGroup();

    for(let brick in brickFrames) {
      this.platforms.create(brickFrames[brick].x, brickFrames[brick].y, 'brick');  
    }
    this.platforms.create(624, 16, 'brick');  

    // DINO
    this.dino = this.physics.add.sprite(100, 250, "dinoSprite");
    this.dino.setScale(0.9, 0.9);

    const dinowalkFrames = [
      { key: "dinoSprite", frame: "walk_1" },
      { key: "dinoSprite", frame: "walk_2" },
      { key: "dinoSprite", frame: "walk_3" },
      { key: "dinoSprite", frame: "walk_4" },
      { key: "dinoSprite", frame: "walk_5" },
      { key: "dinoSprite", frame: "walk_6" },
      { key: "dinoSprite", frame: "walk_7" },
      { key: "dinoSprite", frame: "walk_8" },
      { key: "dinoSprite", frame: "walk_9" },
      { key: "dinoSprite", frame: "walk_10" }
    ];

    const dinoidleFrames = [
      { key: "dinoSprite", frame: "idle_1" },
      { key: "dinoSprite", frame: "idle_2" },
      { key: "dinoSprite", frame: "idle_3" },
      { key: "dinoSprite", frame: "idle_4" },
      { key: "dinoSprite", frame: "idle_5" },
      { key: "dinoSprite", frame: "idle_6" },
      { key: "dinoSprite", frame: "idle_7" },
      { key: "dinoSprite", frame: "idle_8" },
      { key: "dinoSprite", frame: "idle_9" },
      { key: "dinoSprite", frame: "idle_10" }
    ];

    const dinojumpFrames = [{ key: "dinoSprite", frame: "jump_1" }];

    this.anims.create({
      key: "dinoidle",
      frames: dinoidleFrames,
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "dinowalk",
      frames: dinowalkFrames,
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "dinojump",
      frames: dinojumpFrames,
      frameRate: 10,
      repeat: -1
    });
    this.dino.body.setSize(this.dino.width - 70, this.dino.height, true);
    this.dino.setBounce(0.1); // our player will bounce from items
    this.dino.setCollideWorldBounds(true); // don't go out of the map
    this.physics.add.collider(this.dino, this.platforms);

    // COIN
    this.coinPositions = [
      { name: "star1", x: 224.69, y: 326.93 },
      { name: "star2", x: 285.33, y: 324.56 },
      { name: "star3", x: 384.0, y: 263.93 },
      { name: "star4", x: 447.01, y: 263.93 },
      { name: "star5", x: 287.7, y: 198.54 },
      { name: "star6", x: 221.13, y: 198.54 },
      { name: "star7", x: 127.21, y: 134.34 },
      { name: "star8", x: 60.63, y: 131.96 },
      { name: "star9", x: 222.32, y: 70.14 },
      { name: "star10", x: 287.7, y: 68.95 },
      { name: "star11", x: 381.62, y: 101.05 },
      { name: "star12", x: 479.11, y: 135.53 },
      { name: "star13", x: 544.5, y: 165.25 }
    ];

    const coinFrames = [
      { key: "coinSprite", frame: "coin_01" },
      { key: "coinSprite", frame: "coin_02" },
      { key: "coinSprite", frame: "coin_03" },
      { key: "coinSprite", frame: "coin_04" },
      { key: "coinSprite", frame: "coin_05" },
      { key: "coinSprite", frame: "coin_06" }
    ];

    this.anims.create({
      key: "coinRotate",
      frames: coinFrames,
      frameRate: 6,
      repeat: -1
    });

    this.coins = [];
    this.coinPositions.forEach(coin => {
      this.addCoin(coin);
    });
    
    // ---------------------------
    // this.star1Object[0].anims.play("coinRotate", true);

    this.leftKey = this.input.keyboard.addKey("LEFT");
    this.rightKey = this.input.keyboard.addKey("RIGHT");
    this.spacebarKey = this.input.keyboard.addKey("SPACE");
    this.esckey = this.input.keyboard.addKeys("ESC");

    this.cursorKeys = this.input.keyboard.createCursorKeys();
  }

  // function to add coins.
  addCoin(coin) {
    this.coins[coin.name] = this.physics.add
      .sprite(coin.x, coin.y, "coinSprite")
      .setScale(0.4, 0.4);

    this.coins[coin.name].anims.play("coinRotate", true);
    // this.coins[coin.name].setCollideWorldBounds(true);
    // this.coins[coin.name].body.immovable = true;

    this.physics.add.overlap(this.dino, this.coins[coin.name], () => {
     this.coins[coin.name].setActive(false).setVisible(false);
    });

    this.physics.add.collider(this.platforms, this.coins[coin.name]);
  }

  update(time, delta) {
    if (this.leftKey.isDown) {
      this.dino.flipX = true;
      this.dino.setVelocityX(-200);
      if (this.dino.body.onFloor()) {
        this.dino.anims.play("dinowalk", true);
      }
    } else if (this.rightKey.isDown) {
      this.dino.flipX = false;
      this.dino.setVelocityX(200);
      if (this.dino.body.onFloor()) {
        this.dino.anims.play("dinowalk", true);
      }
    } else {
      this.dino.setVelocityX(0);
      if (this.dino.body.onFloor()) {
        this.dino.anims.play("dinoidle", true);
      }
    }

    if (this.spacebarKey.isDown && this.dino.body.onFloor()) {
      console.log("jump");
      this.dino.anims.play("dinojump", true);
      this.dino.setVelocityY(-350);
      this.dino.setY(this.dino.y - 50);
    }

    if (this.esckey.ESC.isDown) {
      this.scene.start(CONST.SCENES.END);
    }
  }
}
