/** @type {Import("../typings/Phaser")} */

import { CONST } from "../config/constant";

export class LoadScene extends Phaser.Scene {
	constructor() {
		super({
			key: CONST.SCENES.LOAD
		});
	}

	preload() {
		this.load.script(
			'webfont',
			'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
		);

		var loadingBar = this.add.graphics({
			fillStyle : {
				color: 0xFFFFFF
			}
		});

		this.load.on('progress', (percent) => {
			loadingBar.fillRect(70, this.game.renderer.height/ 2, (this.game.renderer.width - 150) * percent , 10);
		});

		this.load.on('complete', (percent) => {
			console.log("loading complete");
		});
	}

	create() {
		this.make.text({
			x: 240,
			y: 280,
			text: 'Press Space Bar',
			style: {
				fontSize: '20px',
				fontFamily: 'Arial',
				color: '#ffffff',
				align: 'center',
				backgroundColor: '#000000',
				shadow: {
					color: '#000000',
					fill: true,
					offsetX: 2,
					offsetY: 2,
					blur: 8
				}
			}
		});
		var add = this.add;
		var input = this.input;
		WebFont.load({
			google: {
				families: ['Fredericka the Great']
			},
			active: function() {
				add
					.text(240, 150, `Digger`, {
						fontFamily: 'Fredericka the Great',
						fontSize: 50,
						color: '#ffffff'
					})
					.setShadow(2, 2, '#333333', 2, false, true);
			}
		});
		this.keys = this.input.keyboard.addKeys('SPACE');
	}
	
	update(delta) {
		if (this.keys.SPACE.isDown) {
			this.scene.start(CONST.SCENES.BOARD);
		}
	}
}
