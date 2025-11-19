import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import Modal from "./Modal"
import Authentication from "./Authentication"


export default function Hero (props){
    const {children} = props

  const [showModal, setShowModal] = useState(false)

  const {globalUser, logout} = useAuth()

   function handleCloseModal() {
      setShowModal(false)
    }
  
  
  const header = (
    <header className="header-bg">
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      
      {globalUser ? (<button onClick={logout} className="sign-up-login-button">
        <p>Logout</p>
      </button> )
      
      :(
        
        <button onClick={() => setShowModal(true)} className="header-btn sign-up-login-button">
        <p>SignUp For Free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>)}
      
    </header>
  )
  
  return (
    <>

      <div className="hero-section">
        {header}
        <h1>Coffee Trackig for Coffee <abbr title=" An enthusiast or devotee">Friends</abbr>!</h1>

        <div className="benefits-list">
          <h3 className="font-bolder">Try <span className="text-gradient">Caffiend</span> and start ...</h3>
          <p>✅ Tracking every Coffee</p>
          <p>✅ Measuring your blood caffeine levels</p>
          <p>✅ Costing and quantifying your addiction</p>
        </div>
        <div className="info-card">
          <div>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            <h3>Did you know...</h3>
          </div>
        
          <h3>That Caffiene&apos;s half-life is about 5 hours</h3>
          <p> This means that after 5 hours, half of caffeine you consumed is still in your system, keeping you alert longer! so if you drink a cup of coffee with 200 mg of caffeine, 5 hours, later you&apos;ll still have about 100mg of caffeine in your system. </p>
        </div>
        
      </div>

        {showModal && (<Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
            </Modal>
        )}
    </>
    )
}