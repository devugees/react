import React from 'react';

const Cart = (props) => {

  let sum = 0;

  let rows = props.products.map((product, index) => {
    sum += product.price;
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{product.title}</td>
        <td>${product.price}</td>
      </tr>
    );
  });

  return (
    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Products in cart</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" id="productsBody">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
            <h3 className="pull-right">Total: ${sum}</h3>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-dark">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Cart;
