import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import robotFinder from '../logic/robotFinder'


class SearchCountry extends Component {
    state = {
        iniArray: robotFinder.arrayIni,
        value: "",
        countryArray: [],
        cities: []
    }

    componentWillMount() {

        robotFinder.findAll()
            .then(data => {
                robotFinder.sorting()
                let v = robotFinder.singleCountryName();
                this.setState({ countryArray: robotFinder.arrayTemp })
            });

    }

    submit = (e) => {
        e.preventDefault()

        this.showCities(this.state.value)
    }

    inputValue = (e) => {
        this.setState({ value: e.target.value })
    }

    showCities(country) {
        try {
            let cities = robotFinder.filteringCountry(country)

            this.setState({ cities })
        } catch (err) {
            alert(err.message)
        }
    }

    render() {
        return <div className="searchcountry">
            <form onSubmit={this.submit}>
                <div className="register-div">
                    <select className="select" name="searchCountry" onChange={this.inputValue}>
                        {this.state.countryArray.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    <label htmlFor="searchCountry" className="static-value">SearchCountry</label>
                </div>
                <button type="submit">Search</button>
            </form>
            <div className="left">
                 {this.state.cities.map((city) =>
                     <div key={city.id}>
                         <h6>{city.name}</h6>
                    </div>)}
             </div>
        </div>
    }
}

export default SearchCountry