import React, { Component } from 'react';
import api from 'api';
import Xtorage from '../xtorage'
import './index.css'
import { Button } from 'reactstrap';
import logic from '../../logic'


class Sofa extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        api.showItems('sofa')
            .then((sofa) => {
                this.setState({
                    items: sofa
                })
            })
            .catch(error => {
                console.error(error)
                this.props.history.push(`/`)

            })
    }
    buy = itemId => {
        if ((Xtorage.local.get('user'))) {
            logic.addProductToCart(itemId)
        } else {
            alert("First Login")
            this.props.history.push(`/login`)
        }
    }
    render() {
        return (
            <div className="Sofa container">
                <h1 className="landing-h1">Furniture Sofa </h1>
                <div >
                    {this.state.items.map(item => {
                        return (
                            // <Card >
                            //     <CardImg top width="100%" src={item.image} alt="Card image cap" />
                            //     <CardBody>
                            //         <CardTitle>{item.title}</CardTitle>
                            //         <CardSubtitle>{item.price}</CardSubtitle>
                            //         <CardText>{item.description}</CardText>
                            //         <Button onClick={() => this.buy(item._id)}>Buy</Button>
                            //     </CardBody>
                            // </Card>
                            <div className="card float-sm-left" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    {/* <a href="#" className="btn btn-primary">Add cart</a> */}
                                    <Button onClick={() => this.buy(item._id)}>Add cart</Button>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        )
    }
}

export default Sofa