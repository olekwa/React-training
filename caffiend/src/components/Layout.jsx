import { useState } from "react" 
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"
import Hero from "./Hero"
import Testimonial from "./Testimonial";




export default function Layout (props) {
  const {children} = props

  const [showModal, setShowModal] = useState(false)

  // const {globalUser, logout} = useAuth()
  
  // const header = (
  //   <header className="header-bg">
  //     <div>
  //       <h1 className="text-gradient">CAFFIEND</h1>
  //       <p>For Coffee Insatiates</p>
  //     </div>
      
  //     {globalUser ? (<button onClick={logout} className="sign-up-login-button">
  //       <p>Logout</p>
  //     </button> )
      
  //     :(
        
  //       <button onClick={() => setShowModal(true)} className="sign-up-login-button">
  //       <p>SignUp For Free</p>
  //       <i className="fa-solid fa-mug-hot"></i>
  //     </button>)}
      
  //   </header>
  // )

  const footer = (
    <footer className="footer-bg">
      <p>© 2025 <span className="text-gradient">Caffiend</span> All rights reserved |   made by <a href="http://www.vibezsolution.com" target="_blank"> Vibez Solution Tech</a> using the <a href="http://www.fantacss.smaljames.com" target="_blank">FantaCSS</a></p>
    </footer>
  )

  function handleCloseModal() { 
    setShowModal(false)
  }
  
  return (
    <>
     
     {showModal && ( 
      <Modal handleCloseModal={handleCloseModal}>
        <Authentication handleCloseModal={handleCloseModal }/>
      </Modal>
    )}
      
      <main>
        {children}
      </main>
        <Testimonial />
      {footer}
    </>
  )
}