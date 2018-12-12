import IStoreState from './IStoreState';
import { combineReducers } from 'redux';
import exampleReducer from './contexts/example/Reducer';

// Root reducer combining all other state reducers
export default 
    combineReducers<IStoreState>({
        example: exampleReducer
    });