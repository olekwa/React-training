import {coffeeOptions} from "../utils"
import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../firebase" 
import Testimonial from "./Testimonial"


export default function CoffeeForm (props){
  const {isAuthenticated} = props
  const [showModal, setShowModal] = useState(false)
  const [coffeeSelected, setCoffeeSelected] = useState(null)
  const [showCoffeeType, setShowCoffeeType] = useState(false)

  const [coffeeCost, setCoffeeCost] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const {globalData, setGlobalData, globalUser} = useAuth()

  async function handleSubmit (){
    if (!isAuthenticated){
      setShowModal(true)
      return
    }
  



    if (!coffeeSelected){ 
      return  

    }

    try {

      const newGlobalData = {
      ...(globalData || {})

      } 

      const newTime = Date.now()

      const timeToSubstract = (hour * 60 * 60 * 1000) + (min * 60 * 100)

      const entryTime = newTime - timeToSubstract
      const newData = {
        name: coffeeSelected,
        cost: coffeeCost
      }
      newGlobalData[entryTime] = newData
      console.log(entryTime, coffeeSelected, coffeeCost)
      
      setGlobalData(newGlobalData)
      
      const userRef = doc(db, 'users', globalUser.uid)
      const res =  await setDoc(userRef, {
        [entryTime]: newData
      }, {merge: true})

      setCoffeeSelected(null)
      setCoffeeCost(0)
      setHour(0)
      setMin(0)
        
    } catch (error) {
      console.log(error.message)
    }

    
  }




  function handleCloseModal() { 
    setShowModal(false)
  }
  
  return (
    <>
      {showModal && ( 
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal}/>
        </Modal>
      )}

      <div className="do-you-know">
        <img src="/coffeebee.gif" alt="" />
      </div>

      <div className="bg-stat">
        <div className="section-header">
          <i className="fa-solid fa-pencil"></i>
          <h2>Start Tracking Today</h2>
        </div>  
        <h4 className="stat-sm">Select Coffee type</h4>
        <div className="coffee-grid">
          {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
            return (
              <button onClick={() => {
                setCoffeeSelected(option.name) 
                setShowCoffeeType(false)
              }} className={"button-card" + (option.name ==  coffeeSelected ? 'coffee-button-selected' : '')} key={optionIndex}>
                <h4>{option.name}</h4>
                <p>{option.caffeine} mg</p>
              </button>
            )
          })}

          <button onClick={() => {
              setShowCoffeeType(true)
              setCoffeeSelected(null)
            }} className={"button-card" + (showCoffeeType ? 'coffee-button-selected' : '')}>
            <h4>Others</h4>
            <p>n/a</p>
          </button> 
        </div>
      </div>
      
     { showCoffeeType && 
        (<select onChange={(e) => {
          setCoffeeSelected(e.target.value)
        }} name="coffee-list" id="coffee-list">
          <option value="{null}">Select Type</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option value={option.name} key={optionIndex}>{option.name} - ({option.caffeine}mg)</option>
            )
          })}
        </select>
      )}
      <div className="form-add">
        <h4>Add the cost ($)</h4>
        <input className="w-full" type="number" value={coffeeCost} placeholder="4.50" onChange={(e) => {
          setCoffeeCost(e.target.value)
        }} />

        <h4>Time since consumption</h4>
        <div className="time-entry">
          <div>
            <h6>Hours</h6>
            <select onChange={(e) => {
              setHour(e.target.value)
            }} id="hours-selsct">
              {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex) => {
                return (
                  <option value={hour} key={hourIndex}>{hour}</option>
                )
                
              })}
            </select>
          </div>
          <div>
            <h6>Mins</h6>
            <select onChange={(e) => {
              setMin(e.target.value)
            }} id="mins-selsct">
              {[0, 5, 10, 15, 30, 35, 40,45].map((min, minIndex) => {
                return (
                  <option value={min} key={minIndex}>{min}</option>
                )
              })}
            </select>
          </div>
        </div>
        <button onClick={handleSubmit}>Add Entry</button>
      </div>
     
    </>
  )
}