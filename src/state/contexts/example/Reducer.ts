import IExampleState, { ExampleState } from './IExampleState';
import { ExampleActions, ExampleActionTypes } from './Actions';
import { Reducer } from 'redux';

// the reducer is responsible for manipulating state based on the actions which are 
// dispatched to it from Redux. State should be regarded as immutable, i.e. a copy
// of the state with the changes made is returned instead of returning the original
// state with changes

const exampleReducer: Reducer<IExampleState, ExampleActions> = 

	(state = ExampleState.initialState, action) => {

		switch (action.type) {
			case ExampleActionTypes.Reset:
				return {...state, ...ExampleState.initialState};

			case ExampleActionTypes.Action1:
				return {...state, ...{ text: "Action 1 pressed! " + action.someParameter } };

			case ExampleActionTypes.Action2:
				return {...state, ...{ text: "Action 2 pressed! " + action.someParameter + " " + action.anotherParameter } };

			case ExampleActionTypes.DoApiCall:
				return {...state, ...{ text: "Loading ..." }}

			case ExampleActionTypes.ApiCallSuccess:
				return {...state, ...{ text: "API call successful" }};

			case ExampleActionTypes.ApiCallFailed:
				return {...state, ...{ text: "API call failed" }};

			default:
				return state;

		}

	}

export default exampleReducer;