import React from 'react'
import "./footer.css"

const Footer = () => {
  let footerStyle={
    position:"relative",
    width: "100vw",
    marginTop:"19px",
    bottom:'1px'
    // top: "35vh",  
  } 
  return (
    <footer className='bg-dark text-light py-3 ' style={footerStyle}>
      <p className='text-center mb-0'>Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer
