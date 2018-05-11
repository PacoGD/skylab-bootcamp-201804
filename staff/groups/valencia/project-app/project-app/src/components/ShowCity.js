import React from 'react'
// import infoRobot from './infoRobot'
import robotFinder from '../logic/robotFinder'



function ShowCities(props) {
    let cities = robotFinder.filteringCountry(props.handlerCity)
    return(
        <div className="left">
            {cities.map(city =>
                <div key={city.city}>
                    <h6>{city.city}</h6>
                </div>)}
        </div>)
}

export default ShowCities;