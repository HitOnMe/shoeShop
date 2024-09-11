import React, {Component} from 'react';
import shoeData from '../data/data.json';
import List from './ProductList';
import CartOption from './cartOption';
import CartList from './cartList';

export default class RenderList extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: shoeData,
      myProduct: {},
      myProducts: []  // Correctly initialized in state
    };
  }

  showShoe = (props) => {
   this.setState({
    myProduct: props
   })
  }
  renderShoe = (props) => {
    this.setState((state) => ({
      myProducts: [...state.myProducts, props]
    }))
  }
  render(){
    return(     
      <div>
        <CartList products={this.state.myProducts} /> {/* Correctly using state */}
        <List shoe={this.state.product} buyOption={this.showShoe} />
        <CartOption buyOption={this.renderShoe} shoe={this.state.myProduct} products={this.state.myProducts} /> {/* Correctly using state */}
      </div>
    );
  }
}