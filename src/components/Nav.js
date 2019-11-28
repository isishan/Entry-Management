import React, {Component} from 'react';

class Nav extends Component{

    showCheckout = this.props.showCheckout;
    showCheckin = this.props.showCheckin;

    render(){
        return(
            <div className="navbar">
                <span className="navBrand">Entry Management System</span> <br/>
                <button className="navBtn" onClick={this.showCheckin}>CheckIn</button>
                <button className="navBtn" onClick={this.showCheckout}>CheckOut</button>
            </div>
        )
    }
}

export default Nav