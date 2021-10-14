import React from 'react'
import 'C:/Users/adi/projectdemo/src/STYLING/home.css'
import { useHistory  } from 'react-router-dom'


function Home() {
    let history=useHistory();

    const changeUrl=()=>{

        
    history.push('/Signup')
     
    }
    const changeUrl2=()=>{

        
        history.push('/Signin')
         
        }


    return (
        
           
        <div className="singup">
          
            <div className="whole">
                <div className="back">
                    <h3>WELCOME</h3>
                </div>
                <div className="front">
                    <div id="middle">
                        <div id="mid1"></div>
                        
                        <h5>HEALTH</h5>
                        <div id="mid2"></div>
                        
                    </div>
                 
                   
                    <button type="button" className="signin"  onClick={changeUrl2}>SIGN IN</button>
                    <br/>
              
                 
                    <button  type="button" className="signup" onClick={changeUrl}>SIGN UP</button>
                 
                    
                  
                 
                
                </div>
            </div>
            
            
        </div>
    
    )
}

export default Home


