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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
            <p>You are logged <Button color="link" onClick={() => this._handleUnlog()} >Logout</Button></p>
        </nav>
    )
    _handleUnlog = () => {
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
                                <NavLink href="/login/">Tables</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login/">Chairs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login/">Sofa</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(Header)

