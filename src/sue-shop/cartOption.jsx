import React, { Component } from 'react';

export default class CartOption extends Component {
  constructor(props) {
    super(props);
    
    // Tạo refs cho các phần tử DOM
    this.decreaseBtnRef = React.createRef();
    this.increaseBtnRef = React.createRef();
    this.quantityInputRef = React.createRef();
  }

  // Hàm giảm số lượng
  decrease = () => {
    let currentValue = parseInt(this.quantityInputRef.current.value);
    if (currentValue > 1) {
      this.quantityInputRef.current.value = currentValue - 1;
    }
  };

  // Hàm tăng số lượng
  increase = () => {
    let currentValue = parseInt(this.quantityInputRef.current.value);
    this.quantityInputRef.current.value = currentValue + 1;
  };

  // Hàm kiểm tra chỉ cho phép nhập số
  handleQuantityChange = (e) => {
    const value = e.target.value;

    // Kiểm tra nếu giá trị là số hoặc chuỗi rỗng
    if (/^\d*$/.test(value)) {
      this.quantityInputRef.current.value = value;
    }
  };
  
  render() {
    const {shoe} = this.props;
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
                      {/* Nút giảm */}
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        ref={this.decreaseBtnRef}
                        onClick={this.decrease} // Gắn hàm giảm số lượng
                      >
                        -
                      </button>
                      {/* Input số lượng */}
                      <input
                        type="text"
                        className="form-control text-center"
                        ref={this.quantityInputRef}
                        defaultValue={1}
                        onChange={this.handleQuantityChange} // Gắn hàm kiểm tra chỉ nhập số
                      />
                      {/* Nút tăng */}
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        ref={this.increaseBtnRef}
                        onClick={this.increase} // Gắn hàm tăng số lượng
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>Tổng giá: <strong>{shoe.price}$</strong></div>
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
              <button type="button" className="btn btn-primary">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}