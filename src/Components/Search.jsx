import React, { useState } from 'react';
import Results from "./Results";
import axios from "axios";
import Popup from "./Popup";


function Search() {
    let [state, setState] = useState({
        query: "",
        results: [],
        Valid: false,
        id: "",
        detailedInfo: ""
    })

    let apiKey = "e9b430ec";
    let searchURL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${state.query}`;
    let detailedInfo = `http://www.omdbapi.com/?apikey=${apiKey}&i=`
    
    let handleChange = e => {
        let newValue = e.target.value;
            setState(prevValue => {
                return {
                    ...prevValue,
                    query: newValue
                }
            })
        
    }

    let handleSubmit = e => {
        e.preventDefault();
        if(state.query.length>0) {
            axios(searchURL)
            .then(resp => 
                setState(prevValue => {
                    return {
                        ...prevValue,
                        results: resp.data.Search,
                        Valid: true   
                    }
                
            })).catch(e => {
                return (e)
            }) 
        }
        setState(prevValue => {
            return{
                ...prevValue,
                query: ""
            }
        })
        
    }

    let handleItemClick = id => {
        setState(prevValue => {
            return {
            ...prevValue,
            id: id
            }
        })
        fetch(detailedInfo+id)
        .then(resp => resp.json())
        .then(data => {
            setState(prevValue => {
                return (
                    {
                        ...prevValue,
                        detailedInfo: data
                    }
                )
            })
        })
    }

    let handlePopupClose = () => {
        setState(prevValue => {
            return {
                ...prevValue,
                detailedInfo:""
            }
        })
    }
   

    return (
        <div>
            <form onSubmit={handleSubmit} className="Search_form">
            <div className="inputField">              
                <input type="text" placeholder="Start typing..." onChange={handleChange} value={state.query} />   
            </div>
                <br />
                <button type="submit">Search</button>
            </form>
            <div className="resultsinSearch">
                {state.results.map(item => {
                    return (
                        <Results key={item.imdbID} movie={item} query={state.query}  handleItemClick={handleItemClick}/>
                    )
                })}
            </div>
            <Popup trigger={state.detailedInfo} close={handlePopupClose}/>
        </div>
    )
}

export default Search;
