---
title: Tabbable
sidebar : Docs
showTitle : true
---

## Tabbable

In general, we can use Phaser's DOM element class to create a div over our buttons, and mark that div with the appropriate HTML properties to make it accessible. This is an easy way to implement tab navigation, with the `tabIndex = 0` property being set in our `createTabbableDiv` function.

Here is an example of a button that is clickable, but also clickable with the enter key and space key, after you use TAB to highlight over the button. The easiest way to accomplish this is to fire the 'pointerdown' event that whatever phaser gameobject used is already listening for.

```javascript
export class TabbableButton{
    domElement : Phaser.GameObjects.DOMElement;
    constructor(public scene : Phaser.Scene, x : number, y : number, key : string, public onClick : Function, callbackContext? : any){
        this.btn = new Sprite(scene, x, y, key); // or any other clickable phaser gameobject
        this.btn.setInteractive();
        this.btn.on('pointerdown', () => {
            onClick();
        });
        let el = createTabbableDiv(this.btn.width, this.btn.height);
        el.onkeydown = (e : KeyboardEvent) => {
            // add custom event listeners here
            if ((e.which === 13) || (e.which === 32)) {
                this.btn.emit('pointerdown');
            }
        };
        this.domElement = this.scene.add.dom(this.btn.x, this.btn.y, el);
        this.domElement.setOrigin(0);
    }
}
```