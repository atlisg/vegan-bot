# VeganBot

A bot with all the answers to frequently asked questions and arguments about veganism

## Requirements

* Recent Node and NPM
* Angular-cli

## Dependencies

`npm install`

## Run

`ng serve`

## Build

On the droplet, run
`ng build --prod`
Then, start the server in the background with
`PORT=80 nohup node server.js &`
To stop the server run
`kill $(pgrep node)`
If IP address needs to be added to mongoDB, you can show the IP address of the droplet with
`ip addr show`

## Angular-CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
