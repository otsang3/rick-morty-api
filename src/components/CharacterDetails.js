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
        <div className="Main-Container">
            <img className="box-1" src={props.character.image}/>
            <div className="box-2">
                <h3>{props.character.name}</h3>
                <p>Status: {props.character.status}</p>
                <p>Species: {props.character.species}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Origin: {props.character.origin.name}</p>
                <p>Location: {props.character.location.name}</p>
                <button onClick={() => setButtonToggle(prev => !prev)}>{buttonDisplay}</button>
                {buttonToggle && <EpisodeList episodes={props.character.episode}/>} 
            </div>
            
        </div>
    )
}

export default CharacterDetails;