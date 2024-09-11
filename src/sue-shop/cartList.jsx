import React, { Component } from 'react';
import Cart from './cart';

export default class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products
      });
    }
  }

  calculateTotalPrice = () => {
    return this.state.products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  }

  render() {
    const totalPrice = this.calculateTotalPrice();

    return (
      <div>
        <div className="hidehtmlcart">
          <div id="product-list">
            <div>
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel"><h1>Your Cart</h1></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <div className="mt-3">
                    <h4>Total Price: ${totalPrice}</h4> {/* Hiển thị tổng giá */}
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <Cart products={this.state.products} delete={this.props.deleteProduct} />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}