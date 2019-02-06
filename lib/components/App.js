import React, { Component } from 'react';

class App extends Component {
  
  state = {
    message: 'Hello react!',
  };

  aSyncFunc = () => {
    return Promise.resolve('Nova mensagem222');
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