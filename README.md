# VeganBot

A bot with all the answers to frequently asked questions and arguments about veganism

## Requirements

* Node 8.6.0
* npm 5.3.0
* Angular-cli 1.6.2

## Dependencies

`npm install`

## Run client

`ng serve`

Navigate to `http://localhost:4200/`

## Build client

`ng build`

## Run API server

`node server.js`

Optionally, use nodemon for automatic restart on changes

`nodemon server.js`

## Run SSR server

`node server.ts`

## Build and Deploy

After pulling on the droplet, build the app with server side rendering with

`npm run build:ssr`

Then, start the API server with Forever

`forever start server.js`

Then start the SSR server with

`PORT=80 forever start dist/server.js`

## Useful commands

To stop the servers, first find the id of the process

`forever list`

then run

`forever stop {pid}`

To monitor logs from the servers, first run

`forever logs`

to see the running processes logs, then run

`tail FILENAME -f -n 100`

If IP address needs to be added to mongoDB, the IP address of the droplet can be shown with

`ip addr show`

## API

`// TODO`

## License

`vegan-bot` is licensed under the MIT License
