import React, { Component } from 'react';
import Xtorage from '../xtorage'
import api from 'api';
import { Button } from 'reactstrap';

class Cart extends Component {
    state = {
        deliveryAdress: '',
        creditCard: '',
        price: 3000,
    }
    componentDidMount() {
        if (!(Xtorage.local.get('user'))) {
            this.props.history.push(`/login`)
        }
        api.listOrders(Xtorage.local.get('user'))
            .then((orders) => {
                console.log(orders)
            })
            .catch(error => {
                console.error(error)
                this.props.history.push(`/`)

            })
    }
    deliveryAdress = (e) => {
        const deliveryAdress = e.target.value
        this.setState({ deliveryAdress })
    }
    creditCard = (e) => {
        const creditCard = e.target.value
        this.setState({ creditCard })
    }

    buy = (e) => {
        e.preventDefault()
        api.newOrder((Xtorage.local.get('user')), this.state.deliveryAdress, this.state.creditCard, this.state.price, (Xtorage.session.get('cart')))
        console.log(this.state.creditCard)
        console.log(this.state.deliveryAdress)
        console.log((Xtorage.local.get('user')))
        console.log((Xtorage.session.get('cart')))
    }
    render() {
        return (
            <div>
                <div className="Mycart">
                    <h1>My Cart</h1>
                    <form onSubmit={this.buy}>
                        <label for="username" class="static-value">Price: {this.state.price}€  </label>
                        <input type="deliveryAdress" onChange={this.deliveryAdress} placeholder="deliveryAdress" autoComplete="off" />
                        <input type="creditCard" onChange={this.creditCard} placeholder="creditCard" autoComplete="off" />
                        <button type="submit">Buy</button>
                    </form>
                    <p>No items yet</p>
                </div>

                <div className="MyOrders">
                    <h1>My orders</h1>
                    <p>No orders yet</p>
                </div>
            </div>
        )
    }
}

export default Cart

{/* <Card>
    <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
    </CardBody>
    <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Pay</Button>
    </CardBody>
</Card> */}