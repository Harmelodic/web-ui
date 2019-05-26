# react-ui-components

A library of React components for consistent composable UI development.

## Demo

To view a demo of this application:

```
$ git clone https://gitlab.com/Harmelodic/react-ui-lib.git
$ npm i
$ npm start
```

Then open a browser to `localhost`, on the webpack-dev-server port (defaulted to `8080`).

## Contributing / Adding Components

1. Develop a component by creating a React Component in `src/`.
2. Export the component in `src/index.js`.
3. Export the name of the component in the default export of `src/index.js`.
4. Add a demo of the component to the `demo/ComponentViewer.js`.

## Publishing npm package

```
$ npm version <major|minor|patch>
$ npm publish
$ git push
```