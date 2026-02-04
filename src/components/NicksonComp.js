import React from 'react'

const NicksonComp = (props) => {
       const{fname,lname,email,contact,city}=props;
  return (
    <div>
        <h4>this is function component</h4>
        <p>First name : <strong>{fname}</strong></p>
        <p>Last name  : <strong>{lname}</strong></p>
        <p>Email : <strong>{email}</strong></p>
        <p>Contact number : <strong>{contact}</strong></p>
        <p>City : <strong>{city}</strong></p>
    </div>
  )
}

export default NicksonComp