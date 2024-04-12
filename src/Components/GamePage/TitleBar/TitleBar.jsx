import ReactStarsRating from "react-awesome-stars-rating";
import React from "react";
import './TitleBar.css';

const TitleBar = ({name, rating}) => {
    return (
        <div className='Title'>
            <h1>{name}</h1>
            <h3><ReactStarsRating count={5} value={rating} isEdit={false} primaryColor='White'/> {rating}</h3>
        </div>
    );
}

export default TitleBar;