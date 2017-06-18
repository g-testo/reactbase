import React from 'react';
import {render} from 'react-dom';
import './public/assets/css/main.scss'
import NavBar from './public/assets/components/NavBar.js'
import _ from 'lodash';

class MainInterface extends React.Component {
  render() {
    return(
      <div className="mainContainer">
        <NavBar />
      </div>
    )
  }
}
render(
 <MainInterface/>,
 document.getElementById('MainComponent')
); //render
