import React from 'react'

function Popup(props) {
    let ratings = props.trigger.Ratings
    return (
        <div className="popup" style={{display: props.trigger ? "block" : "none"}}>
            <div className="popup_close" onClick={props.close}>
            <h3>Close</h3>
            </div>
            <header>
                <h1>{props.trigger.Title}({props.trigger.Year})</h1>
            </header>
            <div className="popup_image">
                <img src={props.trigger.Poster} alt={props.trigger.Title}/>
                <div className="popup_content">
                    <h2>{props.trigger.Plot}</h2>
                    <div className="popup_content_cast">
                        <h3>Starring:</h3> <h2>{props.trigger.Actors}</h2>
                    </div>
                    <div className="popup_content_rating">
                        {JSON.stringify.ratings}
                        
                        <h3>IMDB: </h3><h2>{props.trigger.imdbRating}</h2>
                        <h3>MetaScore: </h3><h2>{props.trigger.Metascore}</h2>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Popup;
