import React from 'react';

const Weather = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>
                    {props.city}, {props.country}
                </h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-2">52&deg;</h1>

                {/* Show high and low temp */}
                {highLowTemp(24, 19)}

                <h4 className="py-4">Light Rain</h4>
            </div> 
        </div>
    );
};

function highLowTemp(low, high) {
    return(
        <h3>
            <span className="px-4">{low}&deg;</span>
            <span className="px-4">{high}&deg;</span>
        </h3>
    );
};

export default Weather;