import React, { Component } from 'react';
import swal from 'sweetalert';

function sweetAlert(props) {
  swal({
    title: "Are you sure to buy this product?",
    text: "Once confirmed, this product will be added to your cart!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willBuy) => {
    if (willBuy) {
      props(); // Custom function to handle adding the product
      swal("This product is added to your cart", {
        icon: "success",
      });
    } else {
      swal("You canceled the purchase!", {
        icon: "info",
      });
    }
  });
}

export default class CartOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1, // Initialize quantity state
      totalPrice: props.shoe.price // Initialize totalPrice state
    };
    
    // Create refs for DOM elements
    this.decreaseBtnRef = React.createRef();
    this.increaseBtnRef = React.createRef();
    this.quantityInputRef = React.createRef();
  }

  // Function to calculate the total price
  calculateTotalPrice = () => {
    return (this.state.quantity * this.props.shoe.price).toFixed(2);
  };

  // Decrease quantity
  decrease = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 1) {
        const newQuantity = prevState.quantity - 1;
        return {
          quantity: newQuantity,
          totalPrice: (newQuantity * this.props.shoe.price).toFixed(2)
        };
      }
      return null;
    });
  };

  // Increase quantity
  increase = () => {
    this.setState((prevState) => {
      const newQuantity = prevState.quantity + 1;
      return {
        quantity: newQuantity,
        totalPrice: (newQuantity * this.props.shoe.price).toFixed(2)
      };
    });
  };

  // Handle quantity change
  handleQuantityChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      this.setState({
        quantity: parseInt(value, 10),
        totalPrice: (parseInt(value, 10) * this.props.shoe.price).toFixed(2)
      });
    }
  };

  // Handle add to cart action
  renderList = () => {
    sweetAlert(() => {
      this.props.buyOption({ ...this.props.shoe, quantity: this.state.quantity });
    });
  };

  render() {
    const { shoe } = this.props;
    return (
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productModalLabel">
                Shoe product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={shoe.image}
                    alt="Product Image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7">
                  <h4>{shoe.name}</h4>
                  <p>{shoe.description}</p>
                  <div className="d-flex align-items-center">
                    <span>Số lượng:</span>
                   
                    <div className="input-group ms-3" style={{ width: 120 }}>
                      {/* Decrease button */}
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        ref={this.decreaseBtnRef}
                        onClick={this.decrease}
                      >
                        -
                      </button>
                      {/* Quantity input */}
                      <input
                        type="text"
                        className="form-control text-center"
                        ref={this.quantityInputRef}
                        value={this.state.quantity}
                        onChange={this.handleQuantityChange}
                      />
                      {/* Increase button */}
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        ref={this.increaseBtnRef}
                        onClick={this.increase}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>Tổng giá: <strong>{this.state.totalPrice}$</strong></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary" onClick={this.renderList}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}