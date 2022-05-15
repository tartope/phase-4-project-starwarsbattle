import React from "react";
import "./CharacterCard.css"

// const charactersAPI = '/characters';

function CharacterCard( { character, onCardClick, onClickDelete }){
    // console.log(character)

    return (
        <div className="characterCard"  onClick={()=>onCardClick(character)}>
            <img src={character.image} alt={character.name} />
            <h3> Name: {character.name} </h3>
            <h3> Movie: {character.movie} </h3>
            <h3> Quote: {character.quote} </h3>
            <div className="card-footer"> 
                <button className='edit'> 
                    <a href={`http://localhost:4000/editcharacter/${character.id}`}> edit </a> 
                </button>
                <button className='delete' 
                    onClick={(event) =>{
                    event.stopPropagation()
                    onClickDelete(character)
                }}> delete </button>
            </div>
        </div>
    )

}

export default CharacterCard;