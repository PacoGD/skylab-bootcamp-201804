import React, { Component } from 'react';
import Xtorage from '../xtorage'
import api from 'api';
import logic from '../../logic'

class Cart extends Component {
    state = {
        deliveryAdress: '',
        creditCard: '',
        price: 3000,
        cart: [],
        orders: [],
        products: []
    }
    componentDidMount() {
        if (!(Xtorage.local.get('user'))) {
            this.props.history.push(`/login`)
        }
        api.listOrders(Xtorage.local.get('user'))
            .then((orders) => {
                // this.state.orders = orders
                // this.state.orders = orders
                // console.log(orders)
                console.log(orders)
                console.log(this.state.cart)
            })
            .catch(error => {
                console.error(error)
                this.props.history.push(`/`)

            })
        this.retrieveItem()
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
            .then(() => {
                alert('Your order will arrive in 4-7 days')
                logic.clearProductCart()
                this.props.history.push('/')
            })
            .catch(error => {
                alert(error)
                console.error(error)
                this.props.history.push(`/cart`)
            })
    }



    retrieveItem() {
        let productsArray = []

        Promise.resolve()
            .then(() => this.setState({ cart: Xtorage.session.get('cart') }))
            .then(() => {
                const promises = this.state.cart.map(itemId =>
                    api.showItem(itemId)
                        .then(res => {
                            productsArray.push(res)
                        })
                )

                return Promise.all(promises)
            })
            .then(() => this.setState({ products: productsArray }))

    }



    render() {
        return (
            <div>
                <div className="Mycart">
                    <h1>My Cart</h1>
                    {(Xtorage.session.get('cart')) ? (<form onSubmit={this.buy}>
                        <div>
                            {this.state.products.map(item => { return (<div>Articulo: {item.title}Precio: {item.price}</div>) })}
                        </div>
                        {/* <div>{this.state.cart.map(itemId => {
                            api.showItem(itemId).then(item => {
                                console.log(item)
                                return <div > {item.price}
                                    </div>
                                
                            })
                        })}</div> */}
                        {/* <div>{this.state.cart.map(itemId => {
                            let item = api.showItem(itemId)
                            console.log(item)
                            return (
                                <div > {item.price}
                                </div>
                            )
                        })}</div> */}

                        <label for="username" class="static-value">Price: {this.state.price}€  </label>
                        <input type="deliveryAdress" onChange={this.deliveryAdress} placeholder="deliveryAdress" autoComplete="off" />
                        <input type="creditCard" onChange={this.creditCard} placeholder="creditCard" autoComplete="off" />
                        <button type="submit">Buy</button>
                    </form>)
                        : <p>No items yet</p>}
                </div>

                <div className="MyOrders">
                    <h1>My orders</h1>
                    <p>No orders yet</p>
                    <div className="card">
                        <div className="card-header">
                            Quote
                         </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>3000</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
