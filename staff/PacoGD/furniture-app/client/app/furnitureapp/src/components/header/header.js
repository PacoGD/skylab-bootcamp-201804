import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './index.css'
import Xtorage from '../xtorage'

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Header extends Component {
    state = {
        collapsed: true
    }
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    logOutHeader = (
        <header>
            <p>Welcome, guest, you can <Link to="/login">Login</Link> or <Link to="/register">Create an account</Link> </p>
        </header>
    )
    logHeader = (
        <nav>
            <p> <Button color="link" onClick={() => this._handleUnlog()} >Logout</Button><Link to="/profile"><img className="cart" title="Cart/Profile" src ="https://minicooperbmw.files.wordpress.com/2011/04/carrito-de-compras.png"/></Link></p>
        </nav>
    )
    _handleUnlog = () => {
        Xtorage.local.remove('token')
        Xtorage.local.remove('user')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <header>
                    {(Xtorage.local.get('user')) ? this.logHeader : this.logOutHeader}
                </header>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">FurnitureApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/tables">Tables</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/chairs">Chairs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sofa">Sofa</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(Header)

