
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.spritesheet('die', 'assets/pigeonDieSprite.png', {
      frameWidth: 32, frameHeight: 32
    });
    this.load.spritesheet('fly', 'assets/pigeonFlySprite.png', {
      frameWidth: 32, frameHeight: 32
    });
    this.load.image('pipe', 'assets/pipe.png');
    this.load.image('pause', 'assets/pause.png');
    this.load.image('back', 'assets/back.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;
