import React from "react";
import "./CharacterCard.css"

function CharacterCard( { character, onCardClick, onClickDelete }){

    return (
        <div className="characterCard"  onClick={()=>onCardClick(character)}>
            <img src={character.image} alt={character.name} />
            <h3> Name: {character.name} </h3>
            <h3> Movie: {character.movie} </h3>
            <h3> Quote: {character.quote} </h3>
            <div className="card-footer"> 
                <button className='edit'> 
                    <a href={`/editcharacter/${character.id}`}> edit </a> 
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