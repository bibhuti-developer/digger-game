import {LoadScene} from './scenes/LoadScene';
import {BoardScene} from './scenes/BoardScene';
import {EndScene} from './scenes/EndScene';

var config = {
	pixelArt: true,
	width: 640,
    height: 480,
	renderer: Phaser.AUTO,
	scale: {
		scale: 'SHOW_ALL',
		orientation: 'LANDSCAPE'
	},
	resolution: window.devicePixelRatio,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false,
			gravity: {
				y: 500
			}
		}
	},
	scene: [LoadScene,BoardScene, EndScene]
};

var game = new Phaser.Game(config);