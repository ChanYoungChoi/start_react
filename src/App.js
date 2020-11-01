import React, { Component, Fragment} from 'react';
import MyComponent from './MyComponent';

class App extends Component {

  render() {

      const text = "당신은 어썸한가요";
      const condition = true;

    return (
      <Fragment>
        <MyComponent name="React" age={3}/>
      </Fragment>

    );
  }
}

export default App;