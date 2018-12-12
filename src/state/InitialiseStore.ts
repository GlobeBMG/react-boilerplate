import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from "./RootReducer";
import { StoreState } from './IStoreState';
import { rootSaga } from './middleware/sagas/rootSaga';
import { actionToPlainObject } from './middleware/actionToPlainObject';

export default function initialiseStore() {
	
	const sagaMiddleware = createSagaMiddleware();

	const store =
		createStore(
			RootReducer,
			StoreState.initialState,
			applyMiddleware(actionToPlainObject, sagaMiddleware)
		);

	sagaMiddleware.run(rootSaga);

	return store;

};