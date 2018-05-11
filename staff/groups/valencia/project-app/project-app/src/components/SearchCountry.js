import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import robotFinder from '../logic/robotFinder'


class SearchCountry extends Component {
    state = {
        iniArray: robotFinder.arrayIni,
        countryArray: []
    }

    componentWillMount() {

        robotFinder.findAll()
            .then(data => {
                robotFinder.sorting()
                let v = robotFinder.singleCountryName();
                this.setState({ countryArray: robotFinder.arrayTemp })
            });

    }
    render() {
        return <div className="login">
            <form onSubmit={this.submit}>
                <div className="register-div">
                    <select className="select" name="searchCountry">
                        {this.state.countryArray.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    <label htmlFor="searchCountry" className="static-value">SearchCountry</label>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    }
}

export default SearchCountry