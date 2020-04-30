---
title: Contribute
sidebar: Docs
showTitle: true
---
## Phaser Library Contributions

Based on how you have [chosen to set up your development](quick-start.md), you will have access to the repository in some way. If you are using a submodule, make sure, to make any contributions through GitHub, that you are in the correct repository.

Before following the next steps: 

`cd path/to/cm-phaser-library`

1. Make sure you are in the correct GitHub repository and have properly installed the library
2. `git checkout -b <new branch name>`
3. Make changes or add content to any of the code in the `src` folder.
4. `git add . && git commit -am "adding content" && git push -u origin <new branch name>`
5. Once the changes should be merged to master, create a pull request on GitHub and ask for a contributor to review it.

## Documentation Contributions

This documentation is open source and is built using a Gatsby starter for a markdown website.

It has a bunch of awesome features and lets us write blogs or regular documentation in markdown and publish easily and quickly. I also added syntax highlighting with PrismJS for Javascript syntax highlighting in code blocks.



### Repository Link

The repository for this site can be found [here](https://github.com/cmr624/cm-phaser-library-docs)

### Workflow for contribution to the documentation

NOTE - requires installing the Gatsby CLI and a basic familiarity with Gatsby

1. `git clone https://github.com/cmr624/cm-phaser-library-docs.git`
2. `cd cm-phaser-library-docs && npm i`
3. `git checkout -b <new branch name>`
4. `gatsby develop` and navigate to `http://localhost:8000`
5. Make changes to `contents` markdown files, or the React components in `src` that power the site
6. `git add . && git commit -am "commit message" && git push -u origin <new branch name>`
7. Find the repository on GitHub, and make a pull request into master of your proposed changes