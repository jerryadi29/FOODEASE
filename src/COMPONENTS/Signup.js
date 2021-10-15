import React,{useState} from 'react'
import "../STYLING/signup.css"
import {useHistory } from "react-router-dom";



const Signup = () => {

    let history=useHistory();
    const [state, setstate] = useState({
        FULLNAME:"",
        USERID:"",
        EMAIL:"",
        PHONE:"",
        PASSWORD:""

    })

    // const[Record,setRecord]=useState([])

const changing=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setstate({...state,[name]:value});
}

const Submit=()=>{
   
   history.push("/Main2")
}


    return (
     
                 
        <div className="Sign">
        
            <div className="top">
                <h3>SINGUP</h3>
            </div>
            <div className="form-body">
                <form  action="" >
                    <div className="inputs">
                    <div id="type">
                        <label htmlFor="FULLNAME">FULLNAME:</label><br/>
                        <input placeHolder="JOHN DOE" type="text" 
                        value={state.FULLNAME}
                        onChange={changing}
                        name="FULLNAME" id="FULLNAME"></input>
                    </div>

                    <div id="type">
                        <label htmlFor="USERID">USERID:</label><br/>
                        <input  placeHolder="Johndoe123" type="text" autoComplete="off"
                         value={state.USERID}
                         onChange={changing}
                        name="USERID" id="USERID" ></input>
                    </div>
                    <div id="type">
                        <label htmlFor="EMAIL">EMAIL:</label><br/>
                        <input  placeHolder="xyz@gmail.com"type="email"
                         value={state.EMAIL}
                         onChange={changing}
                        name="EMAIL" id="EMAIL"></input>
                    </div>
                 
                    <div id="type">
                        <label htmlFor="PHONE">PHONE:</label><br/>
                        <input  placeHolder="0123456789" type="number" 
                          value={state.PHONE}
                          onChange={changing}
                        name="PHONE" id="PHONE"></input>
                    </div>

                    <div id="type">
                  
                        <label htmlFor="PASSWORD">PASSWORD:</label><br/>
                        <input   type="password" 
                          value={state.PASSWORD}
                          onChange={changing}
                        name="PASSWORD" id="PASSWORD"></input>
                    </div>
                    <br/>
                    <div>
                      
                   
                        <button id ="register-btn" type="submit" onClick={Submit}>
                            Register
                        </button>
                    
                    </div>
                    </div>
                </form>
            </div>
           
            
       
          
        </div>
       
    )
}

export default Signup


