import React from 'react';
import { Button, Badge } from 'reactstrap';

class LikeCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <h1>Likes : <Badge>{this.state.likesCount}</Badge></h1>
        <div>
          <Button onClick={this.onLike} color="primary">Like me !</Button>
        </div>
      </div>
    );
  }

}

export default LikeCount;
