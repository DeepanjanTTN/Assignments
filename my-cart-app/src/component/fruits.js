import React, {Component} from 'react';


class Fruits extends Component{

    constructor(props){
        super(props);
        this.state ={
            count: 1,
            fruitName: this.props.item,
            fruitPrice: this.props.price,
            price: this.props.price
            
        }
    }


    increaseCounter =() =>{
        this.props.getprice(parseInt(this.state.price) + parseInt(this.state.fruitPrice) );
        this.setState({
            
            count: this.state.count + 1,
            price: (this.state.count + 1) * this.state.fruitPrice
        })
    }

    decreaseCounter = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1,
                price: (this.state.count - 1) * this.state.fruitPrice
            })
        }
        else {
            alert("keep the value positive");
        }
        
    }


    render(){
        return(
            <div>
                <p>Fruit Name: {this.props.item}</p>
                <p>Fruit Price: {this.state.price}</p>
                <p>Quantity: {this.state.count}</p>
                <button onClick={this.increaseCounter}>+</button>
                <button onClick={this.decreaseCounter}>-</button>
            </div>
        );
    }




    componentDidMount(){
        this.props.getprice(this.state.price);
    }
}




export default Fruits;