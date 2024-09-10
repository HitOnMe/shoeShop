import React, {Component} from 'react';
import shoeData from '../data/data.json'
import Product from './product';
export default class List extends Component {
    constructor(props){
      super(props);
      this.state = {
        product: this.props.shoe
      }
    }
    renderShoe = () => {
      const {buyOption} = this.props;
      return (
        this.state.product.map((shoe, index) => {
          return (
            <div className="col-md-4 mb-3" key = {index}>
            <Product shoe = {shoe} buyOption = {()=>{buyOption(shoe)}}/>
           
            </div>
          )
      })
    
      )
      
    }
    render(){
      return(     
        <div className="container mt-5">
          <div className="row">
            {this.renderShoe()}
          </div>
        </div>
    )
    }
}