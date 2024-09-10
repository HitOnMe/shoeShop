import React, {Component} from 'react';
import shoeData from '../data/data.json'
import Product from './product'
export default class Cart extends Component {
   constructor(props){
    super(props);
    this.state = {
      products: shoeData
    }
   }
   renderList = (products = this.state.products) => {
    return(
      products.map((product, index) => {
        console.log(product.name, index)
        return (
        <tr key = {index}>
          <th scope="row">{product.name}</th>
         <img src={product.image} style={{width: 100}} />

          <td>{product.price}</td>
          <td><button className='btn btn-danger'>Delete</button></td>
        </tr>
      
        )
      })
    )
    
   }
   render(){
    return (
      <tbody>
    
    {this.renderList()}
  </tbody>
    )
   }
}