import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import api from 'api';
import Xtorage from '../xtorage'


class Chairs extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        api.showItems('chairs')
            .then((chairs) => {
                this.setState({
                    items: chairs
                })
            })
            .catch(error => {
                console.error(error)
                this.props.history.push(`/`)

            })
    }
    buy = (itemId) => {
 
        if (Xtorage.local.get('user')){
            this.props.history.push(`/cart/${itemId}`)
            
        } else {
            window.alert("Please login first");
            this.props.history.push(`/login`)
        }
    }
    render() {
        return (
            <div className="Chairs">
                <h1 className="landing-h1">Furniture Chairs </h1>
                <div >
                    {this.state.items.map(item => {
                        return (
                                <Card >
                                    <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardSubtitle>{item.price}</CardSubtitle>
                                        <CardText>{item.description}</CardText>
                                        <Button onClick={() => this.buy(item._id)}>Buy</Button>
                                    </CardBody>
                                </Card>
                        )
                    })}

                </div>
            </div>

        )
    }
}

export default Chairs