import React, { useReducer, useEffect } from 'react';
import CharacterListItem from './CharacterListItem.js';

export const CharacterContext = React.createContext()

const initialState = {
    loading: true,
    error: '',
    characters: []
}

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS': 
        return {
            loading: false,
            error: '',
            characters: action.payload
        };
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'something went wrong',
                characters: []
            }
    }
}

function CharacterList() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'FETCH_SUCCESS', payload: data.results})
        })
        .catch(error => dispatch({type: 'FETCH_ERROR'}))
    }, [])

    return(
        <div>
            <CharacterContext.Provider value={state}>
                <CharacterListItem/>
            </CharacterContext.Provider>
        </div>
    )
}

export default CharacterList;