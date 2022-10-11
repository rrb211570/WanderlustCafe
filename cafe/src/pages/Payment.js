import React from 'react';

class PayPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.navToPayment = this.navToMenu.bind(this);
    }
    render() {
        return (
            <div className="Pay">
                <div>
                    <div>
                        <p content="Purchase summary (including date/location)"></p>
                    </div>
                    <div>
                        Card Information
                    </div>
                    <button onClick='navToPayment'>Pay</button>
                </div>
            </div>
        );
    }
    navToPayment(){
        // this.props.pageSwap('Menu')
    }
}

export default PayPanel;