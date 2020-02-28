import React from 'react';
import './style.css';

const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1 className="py-4">{props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>

                <h4 className="pb-4 capitalize">{props.description}</h4>

                {props.temp ? (<h1 className="py-4">{props.temp}&deg;</h1>) : null}

                {/* Show high and low temp */}
                {highLowTemp(props.temp_high, props.temp_low)}

                {props.temp ? (
                    <h3>
                        <span className="px-4">High</span>
                        <span className="px-4">Low</span>                
                    </h3>
    
                ) : null}
            </div> 
        </div>
    );
};

function highLowTemp(low, high) {
    if(low && high) {
        return(
            <h3>
                <span className="px-4">{low}&deg;</span>
                <span className="px-4">{high}&deg;</span>
            </h3>
        );
    };

};

export default Weather;