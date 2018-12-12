import IStoreState from '../../state/IStoreState';
import { connect } from 'react-redux';
import Example, { IPropsFromState, IPropsFromDispatch } from './Example';
import { ExampleAction1, ExampleAction2, ExampleDoApiCall, ExampleResetAction } from 'src/state/contexts/example/Actions';

// REACT-REDUX
// Wrap stateless component with redux connected component

// Map full state to state required for component
const mapStateToProps = 
	(state:IStoreState):IPropsFromState => ({
		text: state.example.text
	});

// Add required action creators for component
const mapPropsFromDispatch:IPropsFromDispatch = 
	{
		action1: ExampleAction1.creator,
		action2: ExampleAction2.creator,
        doApiCall: ExampleDoApiCall.creator,
        reset: ExampleResetAction.creator
	};

// This does the magic of subscribing to state changes and ensuring the wrapped
// stateless component gets all the properties it needs from the Redux state
export default connect(mapStateToProps, mapPropsFromDispatch)(Example);
