import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './index.css'
import Xtorage from '../xtorage'
import { Button } from 'reactstrap';


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
            <p> <Button color="link" onClick={() => this._handleUnlog()} >Logout</Button><Link to="/cart"><img className="cart" title="Cart" src="https://minicooperbmw.files.wordpress.com/2011/04/carrito-de-compras.png" /></Link></p>
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
                {/* <Navbar color="faded" light>
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
                </Navbar> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">FurnitureApp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/tables">Tables</a>
                            <a className="nav-item nav-link" href="/chairs">Chairs</a>
                            <a className="nav-item nav-link disabled" href="/sofa">Sofa</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header)

