import IExampleState, { ExampleState } from './contexts/example/IExampleState';

// this represents the state of the 'entire' application
// it should be composed of other state definitions which represent state 'contexts'
// managed by seperate reducers and have actions which alter those contexts

export default interface IStoreState {
    example: IExampleState
} 

export class StoreState {
    public static readonly initialState : IStoreState = {
        example: ExampleState.initialState
    };
}