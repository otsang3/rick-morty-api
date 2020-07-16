import React, {useContext} from 'react';
import CharacterDetails from './CharacterDetails.js';
import {CharacterContext} from './CharacterList.js';



function CharacterListItem() {

    const characterContext = useContext(CharacterContext);

    return(
        <div className="Container">
            {characterContext.characters.map(character => 
                <CharacterDetails character={character} key={character.id}/>)}
        </div>
    )
}

export default CharacterListItem;