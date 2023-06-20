/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Menu Scene

class TitleScene extends Phaser.Scene {
    constructor () {
      super({ key: 'menuScene'})
  }
  
  init (data) {
    this.camera.main.setBackgroundColor('#ffffff')
    }
  
  preload () {
    console.log('Menu Scene')
  }
  
  create (data) {
  }
  
  update (time, delta){
   }
  }
  
  export default MenuScene 

