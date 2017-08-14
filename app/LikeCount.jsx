import React from 'react';

class LikeCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    localStorage.setItem("likes", 1);
    localStorage.likes = Number(localStorage.likes) +1
    console.log(localStorage.likes);

    let newLikesCount = localStorage.likes;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <h1>Likes : <div className="badge badge-danger">{this.state.likesCount}</div></h1>
        <div>
          <button className="btn btn-primary" onClick={this.onLike} color="primary">Like me !</button>
        </div>
      </div>
    );
  }

}

export default LikeCount;
