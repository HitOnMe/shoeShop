import React, {Component} from 'react';

export default class Product extends Component{
 
  render(){
    const {shoe, buyOption} = this.props;
    
    return (
      <div className="card">
      <img src={shoe.image} className="card-img-top" alt={shoe.alias} />
      <div className="card-body">
        <h5 className="card-title">{shoe.name}</h5>
        <p className="card-text">{shoe.shortDescription}</p>
        <p className="card-text text-danger">Quantity: <strong>{shoe.quantity}</strong></p>
        <p className="card-text text-success">Price: <strong>{shoe.price}$</strong></p>
       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onClick = {buyOption}>Add to Cart</button>
      
      </div>
    </div>
    
    
    )
  }
  
}