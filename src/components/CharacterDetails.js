import React, {useState} from 'react';
import EpisodeList from './EpisodeList.js'

function CharacterDetails(props) {

    const [buttonToggle, setButtonToggle] = useState(false)
    let buttonDisplay;

    if (!buttonToggle) {
        buttonDisplay = 'Click for featured episodes'
    } else {
        buttonDisplay = 'Click to hide featured episodes'
    }

    return(
        <div className="Container">
            <img className="box-1" src={props.character.image}/>
            <div className="box-2">
            <h2>{props.character.name}</h2>
            <h3>Status: {props.character.status}</h3>
            <h3>Species: {props.character.species}</h3>
            <h3>Gender: {props.character.gender}</h3>
            <h3>Origin: {props.character.origin.name}</h3>
            <h3>Location: {props.character.location.name}</h3>
            <button onClick={() => setButtonToggle(prev => !prev)}>{buttonDisplay}</button>
            {buttonToggle && <EpisodeList episodes={props.character.episode}/>} 
            </div>
            
        </div>
    )
}

export default CharacterDetails;