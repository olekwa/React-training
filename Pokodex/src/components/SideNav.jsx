import {first151Pokemon, getFullPokedexNumber} from "../utils"

import { useState } from "react";


function SideNav(props){
  const {selectedPokemon, setSelectedPokemon, handleCloseSideNav, showSideNav} = props
   const [searchval, setSearchval] = useState('')
  
   const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
    
    if ((getFullPokedexNumber(eleIndex)).includes(searchval)) {return true}

    if (ele.toLowerCase().includes(searchval.toLowerCase())) {return true}

    return false
   })
   
  
  return (
    <nav  className={"" + (!showSideNav ? 'open' : '')}>
      <div className={'header' + (!showSideNav ? 'open' : '')}>

        <button onClick={handleCloseSideNav} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
        </button>
      <img src="/Pokemon-Logo1.png" alt="logo" style={{ width: "100px", height: "auto", cursor: "pointer"}}/>
      {/* <h1 className={"text-gradient"}>Pokémon</h1> */}
    </div>
    <input className={'search-bar'} placeholder="E.g. 001 or Balba..." value={searchval} onChange={
      (e) => { setSearchval(e.target.value)}
    }/>
      {filteredPokemon.map ((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon)
        return (
          <button onClick={() => {
             setSelectedPokemon(truePokedexNumber)
             handleCloseSideNav()
          }} key={pokemonIndex} className={'nav-card' + (pokemonIndex === selectedPokemon ? 'nave-card-selected': ' ')}  >
            <p>{getFullPokedexNumber(truePokedexNumber )}</p>
            <p>{pokemon}</p>
          </button>
        )
      })}
    </nav>
  )
}

export default SideNav