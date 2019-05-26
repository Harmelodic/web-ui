# react-ui-components

A library of React components for consistent composable UI development.

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