import React from 'react'
import './LoginModal.css'
const LoginModal = (props) => (
  <div className="Modal"

    // style={{
    //   transform: props.isopen ? 'translateY(0)' : 'translateY(-100vh)',
    //   opacity: props.isopen ? '1' : '0'
    // }}

  >
    {props.children}
  </div>
)

export default LoginModal
