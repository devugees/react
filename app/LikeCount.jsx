import React from 'react';

class LikeCount extends React.Component {

  constructor(props) {
    super(props);
    this.onLike = this.onLike.bind(this);
    this.resetLikes = this.resetLikes.bind(this);
  }
  onLike () {
    if(localStorage.likes == undefined) {
      localStorage.setItem("likes", 1);
    } else {
      localStorage.likes = Number(localStorage.likes) +1
      this.props.updateLikes();
      console.log(localStorage.likes);
    }

  }
  resetLikes() {
    localStorage.setItem("likes", 0);
    this.props.updateLikes();
  }

  render() {
    return (
      <div>
        <h1>Likes : <div className="badge badge-danger">{this.props.likes}</div></h1>
        <div>
          <button className="btn btn-primary" onClick={this.onLike} color="primary">Like me !</button>
          <button className="btn btn-primary" onClick={this.resetLikes} color="primary">reset Likes</button>
        </div>
      </div>
    );
  }

}

export default LikeCount;
