# Carousell Coding Challenge
Authored by : Youngchan Kim
https://carousell-coding-challenge.herokuapp.com/

## Quick Start

    npm install
    npm run watch (development)
    npm start (production)
    npm test (test)

## Stack

    Node.js
    React

## Project structure

    config
    dist*
    src
      ├─client
      │   ├-javascripts     // bundle.js
      │   ├-static          // static files to serve
      │   └─index.html      // client entry html
      ├─server
      │   ├-controllers     // controllers, core part to process requests
      │   ├-models          // data classes
      │   ├-services        // logic classes which are used in controllers
      │   ├-datastore.js    // data storage classes and instance
      │   ├-api-route.js    // backend api routes
      │   └─index.js        // backend main server
      ├─shared              // server-client shared files
      │   ├-components
      │   ├-containers
      │   ├-utils           // helper classes
      │   └─routes.js       // main react-router
      └─test                // unit-test
    gulpfile.babel.js       // gulp(with babel) config file
    server.js               // entry js file
