---
title: Subtitles
sidebar : Docs
showTitle : true
---

## Audio

### Standard Audio Template

This defines a "standard audio interface" which is subject to change. 

Right now, there are three separate sound configs, one for background music, sound effects, and sounds that have subtitles.

`IBaseAudioTracks`

```javascript
interface IBaseAudioTracks {
    // music track - any background or gameplay music
    backgroundMusicTrack : Phaser.Sound.BaseSound;
    readonly defaultBgMusicOptions : Phaser.Types.Sound.SoundConfig;
    sfxOptions : Phaser.Types.Sound.SoundConfig;
    subtitleOptions : Phaser.Types.Sound.SoundConfig;
    // sfx track - any sound effects that aren't words that require subtitles
    playSoundEffect(key : string) : Phaser.Sound.BaseSound;
    playSubtitle(key : string) : Phaser.Sound.BaseSound;

    subtitleContainer : SubtitleContainer;
    subtitleDictionary : Map<string, string>;
}
```

The idea is to save these configs so that any time you play a sound effect or subtitle you use the current config, and that config is changeable by the user in some options menu.

In this case, the `playSubtitle` would require this.

```javascript
// in phaser scene
    playSubtitle(key : string){
        let sound = this.sound.add(key, this.sfxOptions);
    }
```

## Subtitles

We want any access to any audio clip that requires a subtitle in a globally accessible subtitle manager. This manager will play the sound and the associated subtitle on the screen above all rendered scenes.

## Classes

### Subtitle Container

This is a container we can use to pass in Phaser Text objects and have the container stack them up for multiple lines of subtitles.

Example:

```javascript

// in a phaser scene
    create(){
        this.subtitleContainer = new SubtitleContainer(this, 800, 800);
        this.playSubtitle('correct');
    }
    playSubtitle(key : string) : Phaser.Sound.BaseSound {
        let subtitleTrack = this.sound.add(key, this.subtitleOptions);
        subtitleTrack.play();
        let text = this.add.text(0, 0, this.subtitleDictionary.get(key)!, {
            color : 'black',
            fontSize:'24px'})
        text.setOrigin(.5);
        this.subtitleContainer.addSubtitle(text);
        return subtitleTrack;
    }

```

### Subtitle Manager

This manager inherits from Phaser's Plugin System and must be initialized in the `game.ts` configuration. This subtitle exists globally, so any scene has the same subtitle management system.

Class Description

```javascript

class SubtitleManager{
    // our main dictionary, it maps a mp3 key with a subtitle string
    // example: ("goodWork.mp3", "Good Work!")
    subtitleDictionary : Map<string, string>;

    // after we load our assets, we need to initialize the dictionary 
    // we currently do this in our base EDU scene's constructor.
    public initializeSubtitlesFromAudio(dict : Map<string, string>) : void;

    // takes in any phaser scene, and adds a subtitle
    // this phaser scene needs a "subtitleContainer"
    addSubtitle(scene, string) : void;

    // creates a sound instance in the scene
    // plays the audio, and adds the subtitle
    playAudio(scene, key) : void;

}

```
