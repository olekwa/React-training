import { useState } from 'react'
import { Header } from './components/Header'
import { PokeCard } from './components/PokeCard'
import SideNav from './components/SideNav'


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideNav, setShowSideNav] = useState(true)


  function toggleSideNav(){
    setShowSideNav(!showSideNav)
  }

  function handleCloseSideNav(){
    setShowSideNav(true)
  }



  return (
    <>
      <Header toggleSideNav={toggleSideNav}/>
      <SideNav 
      showSideNav={showSideNav} 
      selectedPokemon={selectedPokemon} 
      setSelectedPokemon={setSelectedPokemon} handleCloseSideNav={handleCloseSideNav} />
      <PokeCard selectedPokemon={selectedPokemon}  />

    </>
  )
}

export default App
