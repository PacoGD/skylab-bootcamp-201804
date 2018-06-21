import React, { Component } from 'react';
import Xtorage from '../xtorage'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Cart extends Component {
    state ={
        
    }
    componentDidMount() {
        if (!(Xtorage.local.get('user'))) {
            this.props.history.push(`/login`)
        }
    }
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Pay</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Cart