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
# display image x, y
```
<imageobject>.x
<imageobject>.y
```
