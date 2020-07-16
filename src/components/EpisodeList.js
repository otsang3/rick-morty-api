import React from 'react';
import EpisodeDetails from './EpisodeDetails.js';

function EpisodeList(props) {

    return(
        <div>
            {props.episodes.map(episode => 
                <EpisodeDetails episodeUrl={episode} key={episode.id}/>)}
        </div>
    )
}

export default EpisodeList;