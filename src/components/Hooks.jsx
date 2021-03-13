import React from "react";
import XComponent from "./XComponent";
import {Alert} from "react-bootstrap";
export const Hooks=()=>{
    const [counter,setCounter]=React.useState(0);
    const [age,setAge]=React.useState(18);
    // React.useEffect(function (){
    // } ,[counter,age])
    return(
        <center>
            <div>
                <div>
                    <Alert variant="info">nice man</Alert>
                    <p>
                        Counter:{counter}
                    </p>
                    <button onClick={()=>{
                        setCounter(counter+1);
                    }}>Increment</button>    
                </div>
                
                <div>
                    <p>
                        Age:{age}
                    </p>
                    <button onClick={()=>{
                        setAge(age+1);
                    }}>Increment</button>    
                </div>
                
            </div>
            <br></br>
            <XComponent text={age}/>
        </center>
        
    );
}