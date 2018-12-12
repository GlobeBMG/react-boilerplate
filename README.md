# A React boilerplate project

## Overview

- Bootstrapped with create-react-app
- Typescript
- Redux integration
- Redux-saga integration

## Getting started

yarn install
yarn start

## Project structure

### /components/

React components separated into folders. Any relevant styling for each component (LESS in this case) is put in the same folder and imported in the component .TSX file.

### /components/stateless/

Example of a vanilla React component without state

### /components/reactstateful/

Example of a vanilla React component with state

### /components/reduxconnected/

Example of a React component connected to Redux state using react-redux's connect(). The component is split into 2 files:

- Example.tsx

A stateless REACT component with it's property type definitions based on the origin on the properties

- ExampleConnected.ts

A component wrapper for Example.tsx connecting to Redux with connect()

### /state

Redux state components

- InitialiseStore.ts

Responsible for creating the Redux store and wiring up Redux Saga middleware

- IStoreState.ts

A definition of the state to be stored in Redux

- RootReducer.ts

The root Redux reducer which combines all the reducers in the application. In this example application there is only one reducer (exampleReducer).

### /state/contexts

Reducer and action definitions dealing with different parts of the Redux state are placed in folders here. Each folder contains:

- IxxxxState.ts

A definition of part of the Redux state referenced from IStoreState.ts

- Actions.ts

Definitions of the actions and action creators which are applicable to this part of the state

- Reducer.ts

Reducer for mutating the state based on the actions

### /state/middleware/sagas

- rootSaga.ts

Root saga referenced in InitialiseStore.ts when creating the Saga middleware. References all other sagas to add.

- exampleApiCallSaga.ts

An example saga which makes an API call in response to an action on Redux and raises another action on failure/completion.

### /state/middleware/actionToPlainObject.ts

Simple Redux middleware which allows Redux to work with actions defined as classes. It converts class instances to pure objects.

### ExampleApi.ts

Very basic API call using fetch

### index.tsx

Entry point for the application
