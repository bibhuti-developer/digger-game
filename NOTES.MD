# Play images as animation
```
function preload ()
{
    this.load.image('blast0', '/assets/blast0.png');
    this.load.image('blast1', '/assets/blast1.png');
    this.load.image('blast2', '/assets/blast2.png');
    this.load.image('blast3', '/assets/blast3.png');
    this.load.image('blast4', '/assets/blast4.png')
}

function create ()
{
    this.anims.create({
        key: 'explosion',
        frames: [
            { key: 'blast0' },
            { key: 'blast1' },
            { key: 'blast2' },
            { key: 'blast3' },
            { key: 'blast4' }
        ],
        frameRate: 10,
        repeat: 1
    });

    this.add.sprite(500, 500, 'blast0').play('explosion');
}
```
```
        this.anims.create({
            key: 'walkStraight',
            frames: [
                { key: 'spider'},
                { key: 'spider2'},
                { key: 'spider3'},
                { key: 'spider4'},
                { key: 'spider5'},
                { key: 'spider6', duration: 100}
            ],
            frameRate: 8,
            repeat: -1

        });

        this.add.sprite(100, 655, 'spider').play('walkStraight');
```

# display image x, y
```
<imageobject>.x
<imageobject>.y
```
# Click count
```
export class SimpleScene extends Phaser.Scene {
  create() {
    let clickCount = 0;
    this.clickCountText = this.add.text(100, 200, '');

    const clickButton = this.add.text(100, 100, 'Click me!', { fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.updateClickCountText(++clickCount) );

    this.updateClickCountText(clickCount);
  }

  updateClickCountText(clickCount) {
    this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
  }
}
```

# delete group
1. [remove]: remove one member from the group (and the scene, if specified)﻿
2. [clear]: remove all members from the group (and the scene, if specified)
3. [destroy]: clear, then disconnect the group from the scene
```
this.imageGroup = this.add.group();

for( var i = 0 ; i < 10 ; i++)
{
  var image = this.add.image(100*i, 100*i, "box"); // Add Image
  this.imageGroup.add(image); // added image to group
}

this.imageGroup.clear(true);﻿ // Remove all Children.
```
