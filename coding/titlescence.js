/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Title Scene

class TitleScene extends Phaser.Scene {
    constructor () {
      super({ key: 'titleScene'})
  
     this.titleSceneBackgroundImage = null
     this.titleSceneText = null
      this.titleSceneTextStyle ={ font: '200px Times', fill: this.#fde4b9, align: 'center'}
    }
    
  init (data) {
    this.camera.main.setBackgroundColor('#ffffff')
    }
  
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', 'assets/storyboard.png')
  }
  
  create (data) {
  this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground'). setScale(2.75)
  this.titleSceneBackgroundImage.x = 1920 / 2
  this.titleSceneBackgroundImage.y = 1080 / 2
  
    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStlye).setOrigin(0.5)
  }
    
  
  update (time, delta){
   }
  }
  
  export default TitleScene