import React, { Component } from 'react';
import ChildComp from './childcomp';
import './App.css';
import AuthProvider from './AuthProvider'; 


class App extends Component {

  render() {
    return (
      <AuthProvider>
        <div>
          <h1> parent component passing isAuthenticated property through context</h1>
          <br/>
          <ChildComp />
        </div>
      </AuthProvider>

      

    );
  }
}

export default App;
