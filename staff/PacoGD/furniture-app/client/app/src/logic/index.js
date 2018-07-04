import Xtorage from '../components/xtorage'

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