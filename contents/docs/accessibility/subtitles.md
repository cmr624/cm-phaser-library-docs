---
title: Subtitles
sidebar : Docs
showTitle : true
---

## Introduction

We want any access to any audio clip that requires a subtitle in a globally accessible subtitle manager. This manager will play the sound and the associated subtitle on the screen above all rendered scenes.

## Classes

### Subtitle Manager

File: `src/edu/subtitleManager.ts`

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

### Subtitle Container 

File: `src/edu/subtitleManager.ts`
