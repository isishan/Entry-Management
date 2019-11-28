import React, {Component} from 'react';

const CSS={
    'text-align': 'center'
}

const CSS2={
    'width': '95%'
}

class Home extends Component{

    

    render(){
        return(
            <div>
                <div class="modal-content">
                    <div class="modal-header">
                        {/* <span id="close" onclick="closeit()" class="close">&times;</span> */}
                        <p style={CSS}>Welcome</p>
                        <hr style={CSS2}/>
                    </div>
                    
                    
                    <form>
                        <p>Full Name</p>
                        <input class="input-form" type="text" name="fullName" id="fullName" placeholder="Enter Full Name" required/>
                        <p>Email</p>
                        <input class="input-form" type="email" name="email" id="email" placeholder="Enter Email" required/>
                        <p>Phone Number</p>
                        <input class="input-form" type="text" name="pnumber" id="pnumber" placeholder="Enter Phone Number" required/>
                        {/* <p>Confirm Password</p>
                        <input class="input-form" type="password" name="passwordRe" id="passwordRe" placeholder="Confirm Password" required/> */}
                        <p>Select Host</p>
                        <select className="input-form">
                            <option>Host 1</option>
                            <option>Host 2</option>
                            <option>Host 3</option>
                        </select>
                        <button class="button3">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Home;