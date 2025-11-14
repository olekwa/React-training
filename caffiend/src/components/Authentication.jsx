import { useState } from "react"
import { useAuth } from "../context/AuthContext"


export default function Authentication (props){
  const {handleCloseModal} = props
  const [isregistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState(null)

  const { signup, login } = useAuth()
  
  async function handleAuthentication (){
    if(!email || !email.includes("@") || !password || password.length < 6 || isAuthenticating){
      return 
    } 

    try {

      setIsAuthenticating(true)
      setError(null)
        
      if (isregistration){
        await signup(email, password)
      } else {
        await login(email, password)
      }

      handleCloseModal()
      
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    } finally {
      setIsAuthenticating(false)
    }

  }

  
  return (
    <>
      <h2 className="sign-up-text">{isregistration ? "Sign Up" : "Login"}</h2>
      {isregistration ? <p> Create an account to start tracking your coffee intake</p> : <p>Sign into your account</p>}
      {error && (
        <p>Account doesn't exist</p>
      )}
      <input 
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}} type="email" 
        placeholder="Email" />
      <input 
        value={password} 
        onChange={(e) => {setPassword(e.target.value)}} 
        type="password" 
        placeholder="********" />
      <button onClick={handleAuthentication} className="sign-up-button">{isAuthenticating ? 'Authenticating...' : 'Submit'}</button>
      <hr />

      {isregistration ? (<div className="register-content">
        <p>Already have an account</p>
        <button onClick={() => {setIsRegistration(!isregistration)}} className="register-button">Login</button>
      </div>)
      :
      (<div className="register-content">
        <p>Don&#39;t have an acount?</p>
        <button onClick={() => {setIsRegistration(!isregistration)}} className="register-button">Sign Up</button>
      </div>)}
      
      
      

    </>
  )
} 