import React, {Component} from 'react';
import shoeData from '../data/data.json'
import List from './ProductList'
import CartOption from './cartOption';
export default class RenderList extends Component {
    constructor(props){
      super(props);
      this.state = {
        product: shoeData,
        myProduct: {}
      }
    }
    showShoe = (props) => {
      return (
        this.setState({
          myProduct: props
        })
      )
    }
    
    render(){
      return(     
        <div>
        <List shoe = {this.state.product} buyOption ={this.showShoe}/>
        <CartOption shoe = {this.state.myProduct}/>
        </div>
    )
    }
}