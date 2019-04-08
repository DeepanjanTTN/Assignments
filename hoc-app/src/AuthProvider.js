import AuthContext from './AuthContext';
import React,{Component} from 'react';

class AuthProvider extends Component{
    render(){
      return (
      <AuthContext.Provider value={{isAuthenticated:true}}>
       
       {this.props.children}
  
      </AuthContext.Provider>
      )
    }
  }

  export default AuthProvider;
