import AuthContext from './AuthContext';

import React, { Component } from 'react'

export default (WrappedComponent) => {
    return class AuthHOC extends Component {
  
      static contextType = AuthContext;
  
       
  
      render() {
        return (
          <WrappedComponent {...this.props} type={this.context.type} isAuthenticated={this.context.isAuthenticated} />
        );
      }
    }
  }

