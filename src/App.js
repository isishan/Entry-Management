import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Nav from './components/Nav';

const hidden={
  'display':'none'
}

class App extends Component {

  showCheckout =() =>{
    document.getElementsByClassName('home')[0].style='display:none';
    document.getElementsByClassName('checkout')[0].style='display:block'; 
  }

  showCheckin =() =>{
    document.getElementsByClassName('checkout')[0].style='display:none';
    document.getElementsByClassName('home')[0].style='display:block'; 
  }

  render(){
    return (
      <div className="App">
        <div>
          <Nav showCheckout={this.showCheckout} showCheckin={this.showCheckin}/>
        </div>

        <div className="home">
          <Home/>
        </div>
  
        <div className="checkout" style={hidden}>
          <Checkout/>
        </div>
      </div>
    );
  }
}

export default App;
