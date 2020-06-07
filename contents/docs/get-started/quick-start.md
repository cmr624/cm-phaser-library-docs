---
title: Quick Start
sidebar: Docs
showTitle: true
---
While the repository can be developed by itself, its most common use case is by using a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) in a template Phaser Typescript repository. If we get there, we can think about distributing and a CDN if necessary.

## NPM

For alternative install, use `npm install cm-phaser-library`

and in code

```javascript
import {utils} from 'cm-phaserlibrary';
console.log(utils.rand.randIntInclusive(0, 5));
```

## Installation

1. For use with my GitHub template that has the library marked as a submodule
    1. `git clone https://github.com/cmr624/cm-phaser-template.git`
    2. `cd cm-phaser-template && npm i`

2. For primary development with some other setup
    1. `git clone https://github.com/cmr624/cm-phaser-library.git`
    2. `cd cm-phaser-library && npm i`