import * as React from 'react';
import './Example.css';
import { ExampleResetAction, ExampleAction1, ExampleAction2, ExampleDoApiCall } from '../../state/contexts/example/Actions';

// Describe properties that need to be passed directly to this component
interface IOwnProps {
};

// Props from state
export interface IPropsFromState {
	text: string
}

// Action creators available to component
export interface IPropsFromDispatch {
	action1: typeof ExampleAction1.creator
	action2: typeof ExampleAction2.creator
	doApiCall: typeof ExampleDoApiCall.creator,
	reset: typeof ExampleResetAction.creator
}

// Combine component properties, properties passed from state and actions
// This will ensure the intellisense on the JSX below works for all available properties to this component
type AllProps = IPropsFromState & IPropsFromDispatch & IOwnProps;

// Create stateless component
export const Example : React.SFC<AllProps> = (props) => (
	<div className="example2-container">
		<h1>Redux connected component</h1>
        <h2>Stateful component which is connected to Redux state</h2>

		<div className="buttons">
			<button className="btn" onClick={() => props.action1("Something")}>Action 1</button>
			<button className="btn" onClick={() => props.action2(2, "Something else")}>Action 2</button>
			<button className="btn" onClick={() => props.doApiCall()}>Do API call</button>
			<button className="btn" onClick={() => props.reset()}>Reset</button>
		</div>

		<h3 className="example">
			{props.text}
		</h3>
	</div>
);

export default Example;