import React, { Component } from 'react';
import api from 'api';
import Xtorage from '../xtorage'
// import './index.css'

class Order extends Component {

    render() {
        return (
            <main>
                <div className="row ml-1 mt-4">
                    <div className="col-xl-9 col-lg-8 col-md-9 col-sm-12 col-xs-12 mb-4 mt-3">
                        <form className="mb-3 mx-auto" onSubmit={this.handlerCreateOrder}>

                            <div className="row  mb-3">
                                <div className="col-md-11 input-group mb-3 ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-medium">Nombre y apellidos<i className="far fa-id-card ml-2"></i></span>
                                    </div>
                                    <input type="text" name="name-user"  className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-medium" />
                                    {/* <input type="text" name="name-user" value={name} onChange={this.handlerInputName} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-medium" /> */}
                                </div>
                            </div>

                            <div className="row  mb-3">
                                <div className="col-md-11 input-group mb-3 ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-medium">Dirección de envío<i id='icon' className="fas fa-truck ml-2"></i></span>
                                    </div>
                                    <input type="text" name="delivery-address"  className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-medium" />
                                    {/* <input type="text" name="delivery-address" value={deliveryAddress} onChange={this.handlerInputDeliveryAddress} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-medium" /> */}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-7 input-group mb-3 ">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Método de pago<i className="far fa-credit-card ml-2"></i><i className="fab fa-cc-paypal ml-1"></i></label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01" onChange={this.handlerSelectPaymentMethod}>
                                            <option selected>Seleccionar...</option>
                                            <option value="Tarjeta débito/crédito">Tarjeta débito/crédito</option>
                                            <option value="Paypal">Paypal</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationServer03">Nombre en la tarjeta</label>
                                    <input type="text" name="card-name" className="form-control" placeholder="Nombre y apellidos" required />
                                    {/* <input type="text" name="card-name" value={cardName} onChange={this.handlerInputCardName} className="form-control" placeholder="Nombre y apellidos" required /> */}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationServer04">Número de tarjeta</label>
                                    <input type="number" name="card-number" className="form-control " placeholder="Número de tarjeta válido" required />
                                    {/* <input type="number" name="card-number" value={cardNumber} onChange={this.handlerInputCardNumber} className="form-control " placeholder="Número de tarjeta válido" required /> */}

                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationServer05">Fecha expiración</label>
                                    <input type="date" name="expirity-date" className="form-control" placeholder="MM/AA" required />
                                    {/* <input type="date" name="expirity-date" value={expirityDate} onChange={this.handlerInputExpirityDate} className="form-control" placeholder="MM/AA" required /> */}
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationServer06">CCV</label>
                                    <input type="password" name="ccv"  className="form-control" placeholder="cvv" required />
                                    {/* <input type="password" name="ccv" value={ccv} onChange={this.handlerInputCcv} className="form-control" placeholder="cvv" required /> */}
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input mt-3" type="checkbox" value="" id="invalidCheck3" required />
                                    <label className="form-check-label mt-2" htmlFor="invalidCheck3" style={{ color: "black", fontSize: "1.1rem" }}>Acepto los términos y condiciones</label>
                                </div>
                            </div>

                            <button className="btn btn-md btn-outline-dark my-2 my-sm-0 ml-1 mb-3 mt-4 mx-auto" type="submit">Finalizar Pedido</button>
                        </form>
                        {/* {this.state.error && (<h3 className="errorOrder">* {this.state.error}</h3>)} */}
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-8 mb-4 ">
                        <div className="card">
                            <h5 className="card-header" style={{ borderTopLeftRadius: "calc(1rem - 1px)", borderTopRightRadius: "calc(1rem - 1px)", backgroundColor: "#76a86a" }}>Total Pedido</h5>
                            <div className="card-body">
                                <p className="card-text" > €</p>
                                {/* <p className="card-text" style={{ fontSize: "2.5rem", color: "#6c757d" }}>{this.state.total} €</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Order
                // <div ><br /><br />
                //     <h1>Login</h1><br /><br />
                //     {/* <form className="login-form" onSubmit={this.submit}>
                //         <input className="form-control" type="text" onChange={this.email} placeholder="Email" autoComplete="off" /><br /><br />
                //         <input className="form-control" type="password" onChange={this.userPassword} placeholder="Password" autoComplete="off" /><br /><br />
                //         <button className="btn btn-secondary btn-lg active" type="submit">Login</button>
                //     </form> */}

                // </div>