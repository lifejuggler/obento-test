import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'
import CardListContainer from './CardListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <CardListContainer />
      </div>
    );
  }
}

export default App
