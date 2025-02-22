import React, {useEffect, useState } from "react";
import CharacterCollection from "./CharacterCollection";
import YourBattleChars from "./YourBattleChars";

const charactersAPI = '/characters';
const planetsAPI = '/planets'

function MainPage(){

    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [battlePlanets, setBattlePlanets] = useState([])
    const [battleChars, setBattleChars] = useState([])

    useEffect(()=>{
        fetch(charactersAPI)
        .then(response => response.json())
        .then(charactersData => {
          setCharacters(charactersData)
        })
      }, [])

      useEffect(()=>{
        fetch(planetsAPI)
        .then(response => response.json())
        .then(planetsData => {
          setPlanets(planetsData)
        })
      }, []) 
      
      function handleAddToBattleChars(item) {
        if (!battleChars.includes(item)) {
          setBattleChars([...battleChars, item])
        }
        if (battleChars.length === 2) {
          setBattleChars([...battleChars])
        }
      }

      function handleAddPlanetToBattle(item) {
        if (!battlePlanets.includes(item)) {
          setBattlePlanets([...battlePlanets, item])
        }
        if (battlePlanets.length === 1) {
          setBattlePlanets([...battlePlanets])
        }
      }

      function handleDeleteCharacter(deletedCharacter){
        fetch(`${charactersAPI}/${deletedCharacter.id}`, {
        method: 'DELETE'
        });
        const deleteCharacters = characters.filter(item => item.id !== deletedCharacter.id)
        setCharacters(deleteCharacters);
        const deleteBattleChars = battleChars.filter(item => item.id !== deletedCharacter.id)
        setBattleChars(deleteBattleChars);
      }

    function handleRemoveFromYourBattleChars(battleChar){
      const removeBattleChar = battleChars.filter(item => item.id !== battleChar.id)
      setBattleChars(removeBattleChar)
    }

    function handleRemoveFromYourBattlePlanets(battlePlanet){
      const removeBattlePlanet = battlePlanets.filter(item => item.id !== battlePlanet.id)
      setBattlePlanets(removeBattlePlanet)
    }
    
    return (
        <div>
          <CharacterCollection  characters={characters} planets={planets} handleAddToBattleChars={handleAddToBattleChars} handleAddPlanetToBattle={handleAddPlanetToBattle} setCharacters={setCharacters} handleDeleteCharacter={handleDeleteCharacter} />
          <YourBattleChars characters={characters} battleChars={battleChars} setBattleChars={setBattleChars} battlePlanets={battlePlanets} handleDeleteCharacter={handleDeleteCharacter} handleRemoveFromYourBattleChars={handleRemoveFromYourBattleChars} handleRemoveFromYourBattlePlanets={handleRemoveFromYourBattlePlanets} />
        </div>
      )
}
    
export default MainPage;