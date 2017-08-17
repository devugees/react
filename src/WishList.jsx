
import React from 'react';


class WishList extends React.Component{
 
render(){

	
let liste = this.props.wishlist.map(elem => <li>{elem}</li>);


return(

 	<div className="wishlist">
  		<ul>{liste}</ul>
  	</div>

	)

	}
}

export default WishList;