import React from 'react';
import Order from './order';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            orderitems: {},
            id: '',
        }
    }

    render() {
        return(
            <div className="orders-container" >
                {this.props.orders.map(order => {
            return(
                <Order {... order} key={order.id} />
            )
           
        })
    }
            </div>
        )
        
    }
}


export default Orders;