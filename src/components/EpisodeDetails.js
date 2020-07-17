import React, { useEffect, useState } from 'react';

function EpisodeDetails(props) {

    const [episode, setEpisode] = useState('')

    useEffect(() => {
        fetch(props.episodeUrl)
        .then(res => res.json())
        .then(data => setEpisode(data))
    }, [])

    return(
        <div>
            {episode && <p>{episode.episode}: {episode.name}</p>}
        </div>
    )
}

export default EpisodeDetails;