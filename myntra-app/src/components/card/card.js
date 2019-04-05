import React, {Component} from 'react';
import './card.css'


export default class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            img : this.props.item
        }
    }
    render(){
        return(
            <div>
               <img src={this.state.img} width= "250px" height= "170px" />
            </div>
        );
    }
}