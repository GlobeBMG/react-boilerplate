import * as React from 'react';

// this is a React stateful component which maintains its own state
interface IOwnProps {
    prefix: string
}

interface IOwnState {
    text: string
}

class StatefulComponent extends React.Component<IOwnProps, IOwnState> {

    constructor(props:IOwnProps) {
        super(props);

        // initial state
        this.state = { text: "" };
    }

    public render() {
        return (
            <div className="stateful-container">
                <h1>Stateful component</h1>

                <h2>Stateful component using plain vanilla React</h2>

                <p>
                    Your name: <input type="text" value={this.state.text} onChange={this.updateText} />
                </p>

                <p>
                    Your name is: {this.props.prefix} {this.state.text}
                </p>
            </div>
        );
    }

    private updateText : React.ChangeEventHandler<HTMLInputElement> = 
        (e) => { 
            this.setState({...this.state, ...{ text: e.currentTarget.value }});
        };
}

export default StatefulComponent;