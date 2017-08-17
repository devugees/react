
import React from 'react';
import WishList from './WishList.jsx';

class WishListButton extends React.Component{
	constructor(props) {
    super(props);
     this.state = { showList: false };
     this.click = this.click.bind(this);
	}

	click() {
		if(this.state.showList == true ){
			this.setState({showList:false}) 
		} else {
			this.setState({showList:true}) 
		}
	}

	render() {

		let liste = null;
		let heart;

		if (this.state.showList) {
			liste = <WishList wishlist={this.props.wishlist}/>;
		}

		if(this.state.showList == true ){
			heart = "fa-heart"
		} else {
			heart = "fa-heart-o"
		}

		return(
			<button onClick={this.click} type="button" className="btn btn-lg btn-danger ml-3 my-tooltip wishlist_button" >    
    		<i className={"fa " + heart} aria-hidden="true"></i>
    		{liste}
			</button>

		);
	}
}

export default WishListButton;

