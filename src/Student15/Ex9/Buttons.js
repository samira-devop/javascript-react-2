import React, {useState} from "react";

export const Buttons = () => {
    let [isPushed, setPush] = useState(true)
    const [text1, setText1] = useState("push");
    const [text2, setText2] = useState("push");
   

    const push1= () =>{
     setPush(!isPushed)
     if (isPushed){
        setText1("pushed")
     } else {
        setText1("push")
     }
    
     }
     const push2 = () =>{
        setPush(!isPushed)
        if (isPushed){
           setText2("pushed")
        } else {
           setText2("push")
        }
       
        }
        const reset = () => {
            if (text1=== "pushed" && text2 === "pushed"){
                setText1("push")
                setText2("push")
        }
    }

    return (

        <div>
            <button onClick={()=> push1()}>{text1}</button>  
            <button onClick={()=> push2()}>{text2}</button>
            <button onClick={() => reset()}>Reset</button>
            
        </div>
    )
}