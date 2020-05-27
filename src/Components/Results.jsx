import React from "react";


function Results(props) {
    return (
        <div className="Result" onClick={() => props.handleItemClick(props.movie.imdbID)}>
            <h1 className="Result_title">{props.movie.Title}</h1>
            <img className="Result_image" src={props.movie.Poster} alt={props.movie.Title} />
            
        </div>
    ) 
}
export default Results;