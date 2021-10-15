import React,{useState} from 'react'
import '../STYLING/Signin.css'
import {useHistory } from "react-router-dom";



const Signin = () => {

    let history=useHistory();
    const [detail, setdetail] = useState({ 
        EMAIL:"",
        PASSWORD:""

    })

    // const[Record,setRecord]=useState([])

const changing=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdetail({...detail,[name]:value});
}

const Submit=()=>{
   
   history.push("/Main2")
}


    return (
     
                 
        <div className="Signin">
        
            <div className="top">
                <h3>SIGNIN</h3>
            </div>
            <div className="form-body">
            
                <form  className="form-body-main"action="" >
                <h5>HEALTH</h5>
                    <div className="inputs">
                  
                    <div id="type">
                        <label htmlFor="EMAIL">EMAIL:</label><br/>
                        <input  placeHolder="xyz@gmail.com"type="email"
                         value={detail.EMAIL}
                         onChange={changing}
                        name="EMAIL" id="EMAIL"></input>
                    </div>
                    <div id="type">
                   
                        <label htmlFor="PASSWORD">PASSWORD:</label><br/>
                        <input  type="password" 
                          value={detail.PASSWORD}
                          onChange={changing}
                        name="PASSWORD" id="PASSWORD"></input>
                    </div>
                    <br/>
                    <div>
                      
                   
                        <button id ="Login-btn" type="submit" onClick={Submit}>
                            Login
                        </button>
                    
                    </div>
                    </div>
                </form>
            </div>
           
            
       
          
        </div>
       
    )
}

export default Signin
