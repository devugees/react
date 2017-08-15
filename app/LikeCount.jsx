import React from 'react';

class LikeCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : localStorage.likes};
    this.onLike = this.onLike.bind(this);
    this.resetLikes = this.resetLikes.bind(this);
  }

  onLike () {
    if(localStorage.likes == undefined) {
      localStorage.setItem("likes", 1);
    } else {
      localStorage.likes = Number(localStorage.likes) +1
      console.log(localStorage.likes);
    }

    this.setState({likesCount: localStorage.likes});
  }
  resetLikes() {
    localStorage.setItem("likes", 0);
    this.setState({likesCount: localStorage.likes});
  }

  render() {
    return (
      <div>
        <h1>Likes : <div className="badge badge-danger">{this.state.likesCount}</div></h1>
        <div>
          <button className="btn btn-primary" onClick={this.onLike} color="primary">Like me !</button>
          <button className="btn btn-primary" onClick={this.resetLikes} color="primary">reset Likes</button>
        </div>
      </div>
    );
  }

}

export default LikeCount;
