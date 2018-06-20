import React, { Component } from 'react';
import api from 'api';

class Tables extends Component {
    // state ={
    //     items = []
    // }
    componentDidMount(){
        api.showItems('tables')
        .then((tables )=> console.log(tables))
        // .then((tables) => {
        //     this.setState({
        //         items: tables
        //     })
        // })
        .catch(error => {
            console.error(error)
            this.props.history.push(`/`)
        })
    }
    render(){
        return (
            <div className="tables">
                    <h1 className="landing-h1">Hellou i'm a table </h1>
            </div>
        )
    }
}

export default Tables