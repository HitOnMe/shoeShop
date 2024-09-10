import React, {Component} from 'react';
import Card from './card'
export default class Cardlist extends Component {
    
    render(){
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
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <Card/>
</table>
    </div>
  </div>
</div>

    </div>
  </div>
  
</div>


        )
    }
    }