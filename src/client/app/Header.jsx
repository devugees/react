import React from 'react';
import { Button } from 'reactstrap';

class Header extends React.Component {

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
        Likes : <span>{this.state.likesCount}</span>
        <div>
          <Button onClick={this.onLike} color="primary">Like me !</Button>


        </div>
      </div>
    );
  }

}

export default Header;
