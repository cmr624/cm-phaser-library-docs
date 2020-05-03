---
title: Introduction
sidebar: Docs
showTitle: true
---

## Overview

CM-Phaser-Library is an open source, accessible Phaser 3 library built in Typescript.

Click [here](quick-start) to start developing.

Click [here](contribute) to learn how to contribute either to the docs or the library itself.

## Code Examples

### Importing objects from the library

In any Phaser scene, you can import any of the exported objects from the library.

#### Example : StandardKeyboardInput

```javascript
import {StandardKeyboardInput} from 'cm-phaser-library/src/input/standard.ts'

class MyScene extends Phaser.Scene {
    // a reference for our scene for keys. here we can call our keyboard controls
    keys : StandardKeyboardInput;
    constructor(){
        super('myScene');
    }
    create(){
        // Standard Keyboard Input takes in a "scene" parameter, which in this context
        // is 'this', which is the current scene (MyScene)
        this.keys = new StandardKeyboardInput(this);
    }

    update(){
        // example usage
        if (this.keys.upPressed()) {
            player.move('up');
        }
    }
}

```

#### Example : Default Text

```javascript
import {defaultText} from 'cm-phaser-library/scr/objects/textStyles.ts';

class MainScene extends Phaser.Scene {
    constructor(){
        super('mainScene');
    }
    create(){

        // we use the text style we imported from the library
        this.add.text(0, 0, 'hello, world', defaultText);
    }
}

```

### Inheriting from classes

You can also inherit from custom classes. We can look at a trivial example with the "BaseSprite" class.

The "BaseSprite" class basically stores a reference to the current scene the sprite is in, and adds itself to the scene.

#### Example : Base Player Class inherits from "Base Arcade Sprite"

This is the "Base Player Arcade" class which basically has a reference to our keys.

*NOTE* There's a difference with `this.scene` being called within a `BaseSprite`, because this references the Sprite's reference to the scene that it exists in. In the [previous example](#example--standardkeyboardinput), we initialize the `StandardKeyboardInput` with `this` because the `this` object *itself* is the scene.

This sometimes becomes confusing, because when your `this` object *is* an actual scene, there's a property on that object called `this.scene` which references [Phaser's scene manager](https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.SceneManager.html), which is a different object.

```javascript
import { BaseArcadeSprite } from './../base';

/**
 * BasePlayerArcade
 * @classdesc Base Arcade "Player" which basically is just the base arcade sprite with a reference to the keys
 * @property {StandardKeyboardInput} keys
 */
export default class BasePlayerArcade extends BaseArcadeSprite {
    keys : StandardKeyboardInput;
    constructor(scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene, x, y, key);
        this.keys = new StandardKeyboardInput(this.scene);
    }
}
```

## Goals

1. Build high quality Typescript classes and interfaces using Phaser 3's API
2. Build a modular accessibility framework based on WCAG 2.1 guidelines for "education"-style games, such as quiz games or trivia games.