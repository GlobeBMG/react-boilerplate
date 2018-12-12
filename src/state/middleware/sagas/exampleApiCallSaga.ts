import { put, call, takeLatest } from 'redux-saga/effects';
import { ExampleApi } from '../../../ExampleApi';
import { ExampleActionTypes, ExampleApiCallSuccess, ExampleApiCallFailed } from 'src/state/contexts/example/Actions';

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

function* exampleApiCallSaga() {

    // Listens for the latest ExampleActionType.DoApiCall action to be dispatched to Redux
    // (usually triggered by a component interaction, i.e. click)
    yield takeLatest(ExampleActionTypes.DoApiCall, function* doCall() {

        try {

            // Start the API call asynchronously
            const result = yield call(ExampleApi.exampleApiCall);

            // Create an action to dispatch on success with the returned entity from API
            const resultAction = new ExampleApiCallSuccess(result);

            // Dispatch the new action with Redux
            yield put(resultAction);

        } catch (e) {

            // Dispatch a failure action to Redux
            yield put(new ExampleApiCallFailed());
            return;
            
        }
        
    });

}

export default exampleApiCallSaga