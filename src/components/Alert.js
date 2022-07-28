import React from 'react'

function Alert(props) {

  // this is to make the first letter of success word to upper case i.e. Success 
  const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // if the (props.alert) is null then the statements after the && will not execute else it will execute if the (props.alert) is not null 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert