import * as React from 'react';
import "./App.css";
import ExampleRedux from '../reduxconnected/ExampleConnected';
import ExampleStateful from '../reactstateful/ExampleStateful';
import { Provider } from 'react-redux';
import initialiseStore from '../../state/InitialiseStore';
import BasicComponent from '../stateless/BasicComponent';
import { Route, Switch } from 'react-router';
import Nav from '../nav/Nav';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Provider store={initialiseStore()}>
            <div>
              <Nav />
              <Switch>
                <Route exact={true} path="/" component={BasicComponent} />
                <Route exact={true} path="/reactstateful" component={ExampleStateful} />
                <Route exact={true} path="/reduxconnected" component={ExampleRedux} />
              </Switch>
            </div>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;