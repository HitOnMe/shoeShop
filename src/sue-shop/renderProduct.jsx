import React, { Component } from 'react';
import shoeData from '../data/data.json';
import List from './ProductList';
import CartOption from './cartOption';
import CartList from './cartList';

export default class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: shoeData,
      myProduct: {},
      myProducts: []  // Correctly initialized in state
    };
  }

  updateProduct = (updatedProducts) => {
    this.setState({
      myProducts: updatedProducts
    });
  }

  deleteProduct = (index) => {
    // Tạo bản sao của mảng sản phẩm
    const updatedProducts = [...this.state.myProducts];
    // Xóa sản phẩm từ bản sao
    updatedProducts.splice(index, 1);
    // Cập nhật state với danh sách sản phẩm mới
    this.updateProduct(updatedProducts);
  }

  showShoe = (props) => {
    this.setState({
      myProduct: props
    });
  }

  addProduct = (props) => {
    this.setState((state) => ({
      myProducts: [...state.myProducts, props]
    }));
    // Không cần gọi updateProduct ở đây vì setState đã cập nhật myProducts
  }

  render() {
    return (
      <div>
        <CartList products={this.state.myProducts} deleteProduct={this.deleteProduct} />
        <List shoe={this.state.product} buyOption={this.showShoe} />
        <CartOption buyOption={this.addProduct} shoe={this.state.myProduct} />
      </div>
    );
  }
}