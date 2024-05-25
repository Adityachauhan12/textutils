
import React, { useState } from 'react';



export default function TextForm(props) {
    const [text,setText] = useState("Enter text here");
    /*text="new text" //wrong
    setText="new text"//right*/
    const Handleupcick=()=>{            //up=uppercase
        //console.log("Uppercase was clicked "+text)
        let new_text=text.toUpperCase();
        setText(new_text);
        props.showAlert("Converted to Uppercase","success")
    }
    const Handlelowcick=()=>{            //up=uppercase
        //console.log("Uppercase was clicked "+text)
        let new_text=text.toLowerCase();
        setText(new_text);
        props.showAlert("Converted to Lowercase","success")
    }
    const HandleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
}
    const handleOnchange=(event)=>{
        //console.log("on change")
        setText(event.target.value)  //this is for after updation due to setetxt we could still add whatever we want in our text area box
    }
    return (
       <>

    
        <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} rows="8"></textarea> 
            
            </div>
            <button className="btn btn-primary mx-2" onClick={Handleupcick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={Handlelowcick}>Convert to lowercase</button>
            <button className="btn btn-primary" onClick={HandleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length}words {text.length}characters</p>
            <p>{0.008*text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
