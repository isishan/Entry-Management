import React, {Component} from 'react';


const CSS={
    'text-align': 'center'
}

const CSS2={
    'width': '95%'
}

class Checkout extends Component{
    render(){
        return(
            <div className="modal-content" >
                <div class="modal-header">
                    {/* <span id="close" onclick="closeit()" class="close">&times;</span> */}
                    <p style={CSS}>CheckOut</p>
                    <hr style={CSS2}/>
                </div>
                <form>
                    <p>Phone Number</p>
                    <input className="input-form" type="text" id="pnumber" name="pno" placeholder="Enter your phone number" required/>
                    <button class="button3">CheckOut</button>
                </form>
            </div>
            
        )
    }
}
export default Checkout;