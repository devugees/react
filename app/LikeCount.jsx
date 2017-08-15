import React from 'react';

class LikeCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likes:0};
    this.onLike = this.onLike.bind(this);
  }
  onLike () {
  this.setState({likes:this.state.likes + 1});


  }

  render() {
    return (
        <div>
          <button className="btn btn-info like mx-auto"  onClick={this.onLike}>Like<span className="badge badge-dark">{ this.state.likes} </span></button>
        </div>
    );
  }

}

export default LikeCount;
