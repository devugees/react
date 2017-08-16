import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.cartSum = this.cartSum.bind(this);
  }

  cartSum() {
    let sum = 0 ;
    for(let i = 0 ; i < this.props.cart.length ; i++) {
      sum +=this.props.cart[i].price;
    }
    console.log(sum);
    return sum;
  }

  render() {

    let items = this.props.cart.map((item) => {
      return (
        <li className="media">
          <img className="d-flex mr-3" src={item.src} alt="Generic placeholder image"/>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{item.title}</h5>
            <h6>{item.price+"$"}</h6>
            <p>{item.text}</p>
          </div>
        <hr/>
        </li>
      );
    });

    //console.log(renderdCartItem);
    //this.cartSum();
    //this.setState({cart:renderdCartItem})


    //console.log("items"+this.props.cart);
    //console.log("the sum is "+this.props.sum);
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
                {items}
              </ul>

              <h3>{"Total "+this.cartSum()+"$"}</h3>
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
