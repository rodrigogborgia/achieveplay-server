# AchievePlay Gamification Platform

> DISCLAIMER: This application is under heavy development and is not near completion or availability. Please wait until the 1.0.0 release to start submitting pull requests or forking.

## AchievePlay Server
[![Build Status](https://secure.travis-ci.org/SebaSOFT/achieveplay-server.png?branch=master)](https://travis-ci.org/SebaSOFT/achieveplay-server)
[![Coverage Status](https://coveralls.io/repos/SebaSOFT/achieveplay-server/badge.svg?branch=master)](https://coveralls.io/r/SebaSOFT/achieveplay-server/?branch=master)
[![Dependency Status](https://david-dm.org/SebaSOFT/achieveplay-server/status.svg)](https://david-dm.org/SebaSOFT/achieveplay-server)
[![Dev-Dependency Status](https://david-dm.org/SebaSOFT/achieveplay-server/dev-status.svg)](https://david-dm.org/SebaSOFT/achieveplay-server?type=dev)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/AchievePlay/achieveplay-server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x, npm >= 3.10.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [`node-gyp`](https://github.com/nodejs/node-gyp) - You'll likely need to be able to use `node-gyp`, Node's tool for compiling native add-ons (for things like database drivers). See its [Installation section](https://github.com/nodejs/node-gyp#installation) for more instructions.

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
