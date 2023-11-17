
import './App.css';

import React,{Component} from 'react';
import Navbar from './Navbar';
import News from './News';


export default class App extends Component {
  c= 'jhon';
  render() {
    return(
      <div>
       <Navbar/>
       <News pageSize={6}/>
       
      

      </div>
    )
  }
}
