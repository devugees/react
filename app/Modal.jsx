import React from 'react';

class Modal extends React.Component {

  render() {
    console.log("items"+this.props.cart);
    console.log("the sum is "+this.props.sum);
    return (
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Shopping Cart</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="cartBody">
              <ul className="list-unstyled" >
                {this.props.cart}
              </ul>

              <h3>{"Total "+this.props.sum+"$"}</h3>
            </div>
            <div className="modal-footer">

              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark">Proceed to Payment</button>
            </div>
          </div>
        </div>
      </div>

    )

  }

}

export default Modal;
