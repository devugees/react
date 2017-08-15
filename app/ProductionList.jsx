import React from 'react';
import {render} from 'react-dom';

import ProdComponent from 'ProdComponent.jsx';

class ProdList extends React.Component {

  render() {
    let listArr = [['ehoyo','Cuban Cigar','1000 $','imgs/cubancigar.jpg'], ['bombom','Mustang','2000 $','imgs/mustang.jpg'], ['muchacha','Hashesh','3000 $','imgs/hash.jpg']];
    const tempArr= listArr.map((textProp) => {
      return (<ProdComponent text={textProp[0]} title={textProp[1]} prize={textProp[2]} picSrc={textProp[3]}/>)
    });

    return (
      <div>
        <h3>Productlist</h3>
        <div className="card-deck">
          {tempArr}
        </div>
      </div>
    )
  }
}
export default ProdList;
