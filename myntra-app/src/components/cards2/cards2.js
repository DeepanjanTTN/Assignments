import React, {Component} from 'react';



export default class Card2 extends Component {
    render(){
        return(
            <div>
               <img src={this.props.cardi}   width= "250px" height= "330px" /> 
            </div>
        );
    }
        
}