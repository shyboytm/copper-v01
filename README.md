# Copper
The Quarry website open sourced for those who would like to use it.

## General Info

This is an open source project from the team at Quarry that allows full access to our website code. We believe in helping others and contributing to the world of open source resources. We will be improving and adding to this code base over time. Follow Quarry on Twitter and Facebook to stay up to date with updates.

Foundation is used as the main building block to help streamline the development process as well as provide a more global use and understanding of the code base.

Please refer to the [Foundation 5 Docs](http://foundation.zurb.com/sites/docs/v/5.5.3/sass.html) for help and see below how to setup and use this repository on your environment.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:fromcortes/descender.git
npm install && bower install
```
While you're working on your project and want to edit the global Sass files, run `gulp`

While you're working on your project and want to edit Foundation settings, run `grunt`

And you're set!

## Directory Structure

  * `sass/style.scss`: Global custom style configuration settings go in here
  * `sass/helpers.scss`: Helper classes to help you write less code styles go in here
  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go in here

## Giving Feedback

This code base is by no means perfect or 100% useful to your workflow, we are open to feedback and will look into any and all issues and feedback we receive.
