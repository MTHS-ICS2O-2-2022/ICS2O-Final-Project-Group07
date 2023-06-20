/* global Phaser */

// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This is Game Scene

/**
 * This class is the Game Scene.
 */

class GameScene extends Phaser.Scene {
    // crate an chicken
    createcar() {
      const carXLocation = Math.floor(Math.random() * 1920) + 1; // this will get a number between 1 and 1920;
      let carXVelocity = Math.floor(Math.random() * 50) + 1; // this will get a number between 1 and 50;
      carXVelocity *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases
      const car = this.physics.add
        .sprite(carXLocation, -100, "car")
        .setScale(0.05);
      car.body.velocity.y = 200;
      car.body.velocity.x = carXVelocity;
      this.carGroup.add(car);
    }
  
    createChicken() {
      const chickenXLocation = Math.floor(Math.random() * 1920) + 1; // this will get a number between 1 and 1920;
      let chickenXVelocity = Math.floor(Math.random() * 50) + 1; // this will get a number between 1 and 50;
      chickenXVelocity *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases
      const Chicken = this.physics.add
        .sprite(chickenXLocation, -100, "chicken")
        .setScale(0.35);
      chicken.body.velocity.y = 200;
      chicken.body.velocity.x = chickenXVelocity;
      this.chickenGroup.add(chicken);
    }
  
    constructor() {
      super({ key: "gameScene" });
  
      this.background = null;
      this.chicken = null;
      this.score = 0;
      this.scoreText = null;
      this.scoreTextStyle = {
        font: "65px Arial",
        fill: "#ffffff",
        align: "center",
      };
      this.gameOverTextStyle = {
        font: "65px Arial",
        fill: "#ff0000",
        align: "center",
      };
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor("#0x5f6e7a");
    }
  
    preload() {
      console.log("Game Scene");
  
      // images
      this.load.image("car", "./assets/cartoon-car-compact-car-model-car-lego-toy-block-vehicle-physical-model-red-png-clipart.png");
      this.load.image("car2", "./assets/luxury-car-transparent-background-3d-rendering-illustration_494250-60554");
      this.load.image("car3", "./assets/pngtree-ai-vector-cartoon-hand-drawn-children-s-kindergarten-building-block-car-png-image_4078501.png");
      this.load.image("chicken", "./assets/11-112376_minecraft-chicken-transparent-hd-png-download.png");
      // sound
      this.load.audio("death", "./assets/death.wav");
    }
  
    create(data) {
      this.background = this.add.image(0, 0, "binary").setScale(3.8);
      this.background.setOrigin(0, 0);
  
      this.scoreText = this.add.text(
        10,
        10,
        "Score: " + this.score.toString(),
        this.scoreTextStyle
      );
  
      this.car1 = this.physics.add
        .sprite(1920 / 2, 1080 - 100, "car1")
        .setScale(0.175);
  
      // crate a group for the dot
  
      this.chickenGroup = this.add.group();
      this.createDot();
  
      this.car3Group = this.add.group();
      this.createGhost();
  
      // create a group for the dot
      this.physics.add.collider(
        this.car3,
        this.chickenGroup,
        function (car3Collide, chickenCollide) {
          chickenCollide.destroy();
          this.sound.play("eat");
          this.score = this.score + 1;
          this.scoreText.setText("Score: " + this.score.toString());
          this.createDot();
          this.createDot();
        }.bind(this)
      );
  
      this.physics.add.collider(
        this.car3,
        this.chickenGroup,
        function (car3Collide, chickenCollide) {
          this.sound.play("death");
          this.physics.pause();
          ghostCollide.destroy();
          shipCollide.destroy();
          this.gameOverText = this.add
            .text(
              1920 / 2,
              1080 / 2,
              "Game over!\nClick to play again.",
              this.gameOverTextStyle
            )
            .setOrigin(0.5);
          this.gameOverText.setInteractive({ useHandCursor: true });
          this.gameOverText.on("pointerdown", () =>
            this.scene.start("gameScene")
          );
        }.bind(this)
      );
    }
  
    update(time, delta) {
      const keyLeftObj = this.input.keyboard.addKey("LEFT");
      const keyRightObj = this.input.keyboard.addKey("RIGHT");
      const keyupObj = this.input.keyboard.addKey("up");
      const keydownObj = this.input.keyboard.addKey("down");
  
      if (keyLeftObj.isDown === true) {
        this.chicken.x = this.chicken.x - 15;
        if (this.chicken.x < 0) {
          this.chicken.x = 2000;
        }
      }
  
      if (keyRightObj.isDown === true) {
        this.chicken.x = this.chicken.x + 15;
        if (this.chicken.x > 1920) {
          this.chicken.x = -100;
        }
      }
  
      if (keyupObj.isDown === true) {
        this.chicken.y = this.chicken.y - 15;
        if (this.chicken.y < 0) {
          this.chicken.y = 1080;
        }
      }
  
      if (keydownObj.isDown === true) {
        this.chicken.y = this.chicken.y + 15;
        if (this.chicken.y > 1080) {
          this.chicken.y = 0;
        }
      }
      this.ghostGroup.children.each(function(respawn) {
        if (respawn.y > 1200) {
          respawn.y = -100
        }
  
        if (respawn.x > 1920) {
          respawn.x = -100
        }
      })
    }
  }
  
  export default GameScene;
  