import React from "react";
import CartPanel from "./Cart";

class ShopPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ''
        }
        this.addToCart = this.addToCart.bind(this);
        this.navToPayment = this.navToPayment.bind(this);
    }
    render() {
        return (
            <div className="Shop">
                <div>
                    Choose session:
                </div>
                <div>
                    {this.state.items}
                </div>
                <div>
                    <CartPanel />
                    <button onClick='navToPayment'>Buy now</button>
                </div>
            </div>
        );
    }
    componentDidMount(){
        // fetch products, build into JSX, store in 'this.state.items'
    }
    addToCart(e) {

    }
    navToPayment() {
        // this.props.pageSwap('Menu')
    }
}

export default ShopPanel;