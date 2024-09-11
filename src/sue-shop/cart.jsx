import React, { Component } from 'react';

export default class Cart extends Component {
  renderList = () => {
    return (
      this.props.products.map((product, index) => {
        return (
          <tr key={index}>
            <th scope="row">{product.name}</th>
            <td><img src={product.image} style={{ width: 100 }} alt={product.name} /></td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button className='btn btn-danger' onClick={() => this.props.delete(index)}>Delete</button>
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <tbody>
        {this.renderList()}
      </tbody>
    );
  }
}