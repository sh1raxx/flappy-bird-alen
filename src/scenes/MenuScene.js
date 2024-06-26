
import BaseScene from './BaseScene';

class MenuScene extends BaseScene {

  constructor(config) {
    super('MenuScene', config);

    this.menu = [
      {scene: 'PlayScene', text: 'Play'},
      {scene: 'ScoreScene', text: 'Score'},
      {scene: null, text: 'Exit'},
    ]
  }

  create() {
    super.create();

    this.createAuthor();
    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
  }

  createAuthor(){
    this.add.text(16, this.config.height-30,'Programmed by: Alen Ismagambetov', {fontSize:'16px', fill: '#000'});
  }
  
  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.setInteractive();

    textGO.on('pointerover', () => {
      textGO.setStyle({fill: '#ff0'});
    })

    textGO.on('pointerout', () => {
      textGO.setStyle({fill: '#fff'});
    })

    textGO.on('pointerup', () => {
      menuItem.scene && this.scene.start(menuItem.scene);

      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }
    })
  }
}

export default MenuScene;



// Create ScoreScene
// Display Best score, you can get from the local storage
