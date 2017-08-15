import React from 'react';
import {render} from 'react-dom';

import ProdComponent from 'ProdComponent.jsx';

class ProdList extends React.Component {

  render() {
    let listArr = [['ehoyo'], ['bombom'], ['mutchacha']];
    const tempArr= listArr.map((textProp) => {
      return (<ProdComponent text={textProp}/>)
    });

    return (
      <div>
        <h3>Productlist</h3>
        <div className="card-deck">
          {tempArr};
        </div>
      </div>
    )
  }
}
export default ProdList;
