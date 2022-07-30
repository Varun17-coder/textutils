import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
        if(text===''){
            props.showAlert("write the content","warning") 
        }
        else{
        props.showAlert("converted to upperCase","success")
        }
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        if(text===''){
            props.showAlert("write the content","warning") 
        }
        else{
        props.showAlert("converted to lowerCase","success")
        }
    }
    const handleClrClick = ()=>{
        let newText = "";
        setText(newText)
        if(text===''){
            props.showAlert("write the content","warning") 
        }
        else{
        props.showAlert("text has been cleared","success")
        }
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();// this funtions will remove the selection 
        navigator.clipboard.writeText(text.value);
        if(text===''){
            props.showAlert("write the content","warning") 
        }
        else{
            props.showAlert("text has been copied","success")
        }
    }

    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        if(text===''){
            props.showAlert("write the content","warning") 
        }
        else{
        props.showAlert("extra spaces removed ","success")
        }
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        // used to change the text in box on change or to type in the text box
        setText(event.target.value)
    }

    // -------------this is actually the state variable, here all the changes are reflected in the app by the manupilation of above functions --------------------------------------------------------------------------
    const [text,setText] = useState(''); 
    // text = "new text"; //Wrong way to change the state
    // setText("new text");  // Correct way to change the state
    return (
    <>

    {/* the first curly brace is to write javascript and the second is for that to tell, it is a object inside the javascript, which is inside the style component*/}
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
         <div className="mb-3">

             {/* if we wnat to change the color of the textarea we can do it  but I'm not doing it */}
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Enter the text'></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p> {text.split(/\s+/).filter((word)=>{ return word.length!==0}).length} words {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).filter((word)=>{ return word.length!==0}).length} Minutes to read</p>
        <h3>Peview</h3>
        <p>{text.length>0?text:'nothing to preview'}</p>
    </div>
    </>
  )
}
