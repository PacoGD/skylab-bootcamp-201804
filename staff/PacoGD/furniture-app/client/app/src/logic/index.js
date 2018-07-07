import Xtorage from '../components/xtorage'
import api from 'api';
api.url = 'http://localhost:5000/api'

const logic = {
    /**
     * Manage cart products
     * 
     * @param {Array} cart The user id.
     * 
     * @returns {[Cart]}
     */

    cart(cart) {
        if (typeof cart !== 'undefined') {
            this._cart = cart

            return
        }
        return this._cart
    },

    addProductToCart(productId) {
        alert('Product added to cart')
        let products = this.cart() || []
        products.push(productId)
        this.cart(products)

    },

    clearProductCart() {
        this.cart(null)

        return true;
    }
}
export default logic