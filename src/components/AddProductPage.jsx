import React from 'react';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let newProduct = {
      title: this.title.value,
      img: this.img.value,
      price: this.price.value,
      description: this.description.value
    };
    this.props.handleAddProduct(newProduct);
    this.title.value = '';
    this.img.value = '';
    this.price.value = '';
    this.description.value = '';
  }

  render() {
    return (
      <div className="container main">
      <form id="form-add-product" onSubmit={this.onSubmit}>
        <h1>Add new Product</h1>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Title:</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" required
              ref={(input) => { this.title = input; }}/>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Image URL:</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" required
              ref={(input) => { this.img = input; }} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Price (in $):</label>
          <div className="col-sm-8">
            <input type="number" className="form-control"  required
              ref={(input) => { this.price = input; }} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Description:</label>
          <div className="col-sm-8">
            <textarea className="form-control"  required
              ref={(input) => { this.description = input; }}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary pull-right">Submit</button>
      </form>
      </div>
    );
  }
}

export default ProductPage;
