import { CONST } from "../config/constant";

export class EndScene extends Phaser.Scene {
	constructor() {
		super({
			key: CONST.SCENES.END
		});
	}

	preload() {
		this.load.script(
			'webfont',
			'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
		);

		this.add.graphics();
    }
    
	create() {
		console.log("Create of EndScene ");
		var add = this.add;
		WebFont.load({
			google: {
				families: ['Fredericka the Great']
			},
			active: function() {
				add
					.text(190, 180, `Game Over`, {
						fontFamily: 'Fredericka the Great',
						fontSize: 50,
						color: '#ffffff'
					})
					.setShadow(2, 2, '#333333', 2, false, true);
			}
		});
    }
    
	update(delta) {

	}
}
