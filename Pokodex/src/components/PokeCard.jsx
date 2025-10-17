import { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import {TypeCard} from "./TypeCard"
import { Modal } from "./Modal";

export function PokeCard(props) {
  const { selectedPokemon } = props;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState(null)
  const [loadingSkill, setLoadingSkill] = useState(false)

  const {name, sprites, types, height, weight, abilities, moves, stats} = data || {}

   const imgList = Object.keys(sprites || {}).filter(val => {
        if (!sprites[val]) { return false }
        if (['versions', 'other'].includes(val)) { return false }
        return true
    })

    async function fetchMoveData(move, moveUrl){
      if (loadingSkill || !localStorage || !moveUrl) {return}
      
      let cache = {}
      if (localStorage.getItem('pokedex-moves')){
        cache = JSON.parse(localStorage.getItem('pokedex-moves'))

        if (move in cache) {
          setSkill(cache[move])
          return
        }
      }

      try {
        setLoadingSkill(true)
        const res = await fetch(moveUrl)
        const moveData = await res.json()
        const description =
        moveData?.flavor_text_entries?.find(
          (val) =>
            val.language?.name === "en" &&
            val.version_group?.name === "firered-leafgreen"
        )?.flavor_text?.replace(/[\n\f]/g, " ") || "No description available.";
           
        // console.log(
        // moveData.flavor_text_entries.map(f => ({
        //   lang: f.language.name,
        //   version: f.version_group.name,
        //   text: f.flavor_text
        // }))
      

       const skillData = {
        name: move, description}

      setSkill(skillData) 
      cache[move] = skillData
      localStorage.setItem('pokedex-moves', JSON.stringify(cache))

      }catch (error) {
        console.error("Error fetching move data:", error);
      }finally {
        setLoadingSkill(false)
      }
    }

  useEffect(() => {
    if (loading || !localStorage) {return}

    let cache = {}
    if (localStorage.getItem('pokedex')){
      cache = JSON.parse(localStorage.getItem('pokedex'))

      if (selectedPokemon in cache) {
        setData(cache[selectedPokemon])
        return
      }
    }  

    async function fetchPokemonData(){
      setLoading(true)
      try {
        const baseUrl = 'https://pokeapi.co/api/v2/'
        const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
        const finalUrl = baseUrl + suffix
        const res = await fetch(finalUrl)
        const pokemonData = await res.json()
        setData(pokemonData)
        
        console.log(pokemonData)
        
        cache[selectedPokemon] = pokemonData
        localStorage.setItem('pokedex', JSON.stringify(cache))
        
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false) 
      }
    }
    
    fetchPokemonData()
  
    
    

  }, [selectedPokemon])
  
  if (loading || !data) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="poke-card">
      {skill && <Modal handleCloseModal={() => { setSkill(null)}}>
        <div>
          <h6>Name</h6>
          <h2 className="skill-name">{skill.name.replaceAll('_', ' ')}</h2>
        </div>
        <div>
          <h6>Description</h6>
          <p>{skill.description}</p>
        </div>
      </Modal>}
      
      <div>
        <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
        <h2>{name}</h2> 
      </div>
      <div className="type-container">
        {types?.map((typeobj, typeIndex) => {
          return (
            <TypeCard key={typeIndex}  type={typeobj?. type?.name}/>
          )
        })}

      </div>

      <img className="default-img" src={"/pokemon/" + getFullPokedexNumber(selectedPokemon) + ".png"} alt={`${name}-larg-img`} />

      <div className="img-container">
        {imgList.map((spriteUrl, spriteIndex) => {
          const imgUrl = sprites[spriteUrl]
          return (
            <img key={spriteIndex} src={imgUrl} alt={`${name}-img-$(spriteUrl)`}/>
          )
        })}
      </div>
      <div className="stats-card">
          {stats?.map((statObj, statIndex) => {
            const {stat, base_stat} = statObj 
            return (
              <div key={statIndex} className="stat-item">
                <p>{stat?.name.replaceAll('-', ' ')}</p>
                <p>{base_stat}</p>
              </div>
            )
          })}
      </div>
      <h3>Moves</h3>
      <div className="pokemon-move-grid">
        {moves?.map ((moveObj, moveIndex) => {
          return (
            <button className="button-card pokemon-move" key={moveIndex} onClick={() => { 
              fetchMoveData(moveObj?.move?.name, moveObj?.move?.url)
            }}>
              <p>{moveObj?.move?.name.replaceAll('-', ' ')}</p>
            </button>
          )
        })}
      </div>
    </div> 

  )
}