import React, {Component} from 'react';
import Fruits from './fruits';


class Mycart extends Component{

    constructor(){
        super();
        this.state = {
        
            fruitsArr : [],
            fruits: {
                name: "",
                price : 0
            }
        }
    }







    onHandle = (e) => {
        let fruits = {};
        fruits[e.target.name] = e.target.value;
        fruits[e.target.price] = parseInt(e.target.value);
        this.setState({
            fruits:{
               ...this.state.fruits,
               ...fruits
           }
        })
    }



    onAdd = () =>{
       
        this.setState({
            fruitsArr: [...this.state.fruitsArr, this.state.fruits]
        })
        
    }

    onDel = (index) => {
        let arr1 = [...this.state.fruitsArr];
        arr1.splice(index,1);
        this.setState({
            fruitsArr: arr1
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
    }

    getprice = (p) => {
        console.log(p);
        var newarr = [];
        newarr.push(p);
        console.log(newarr);
    }

    render(){
        return(
            <div className="myCart-cont">
                <div className="heading">My Cart</div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Enter fruit Name" value={this.state.fruits.name} onChange={this.onHandle} />
                    <input type="text" name="price" placeholder="Enter price" vlaue={this.state.fruits.price} onChange={this.onHandle} />
                    <button onClick={this.onAdd}>Add item</button>
                </form>

                <ul>
                {this.state.fruitsArr.map((item , index ) =>(
                   
                      <li className="li-elm" key={item.name + ' ' + index}><Fruits item={item.name} price={item.price} getprice={this.getprice}/>
                       <button onClick={() => {this.onDel(index)}}>Delete</button></li>
                     
                    ))
                }
                </ul>

                

                
               
            </div>
        );
        
    }
}


export default Mycart;