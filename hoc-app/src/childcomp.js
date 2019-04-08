import React, { Component } from 'react'
import AuthContext from './AuthContext';
import InjectAuth from './InjectAuth';

 class ChildComp extends Component {



  render() {
  
    return (
      <div>
        <h1>child component</h1>
        <h1> whether user is authenticated:  {this.props.isAuthenticated.toString()}</h1>
        {/* <AuthContext.Consumer>
          {value=> (<h1>{value}</h1> )}
        </AuthContext.Consumer> */}
         </div>
           
  )
  }
}
ChildComp.contextType = AuthContext;
export default  InjectAuth(ChildComp);


