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

## Build client and run server

`ng build`

`node server.js`

Optionally, use nodemon for automatic restart on changes

`nodemon server.js`

## Build and Deploy

On the droplet, run

`ng build --prod`

Then, start the server with Forever

`PORT=80 forever start server.js`

To stop the server, first find the id of the process

`forever list`

then run

`forever stop <id>`

If IP address needs to be added to mongoDB, the IP address of the droplet can be shown with

`ip addr show`

## API

`// TODO`

## License

`// TODO`
