import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  
  state = {
    message: 'Hello react!',
  };

  aSyncFunc = () => {
    return Promise.resolve('Nova mensagem');
  };

  async componentDidMount(){
    this.setState({
      message: await this.aSyncFunc()
    });
  }

  render() {
    return (
      <div>
        <h2> {this.state.message} </h2>
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);