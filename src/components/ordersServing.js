import React from 'react';
import OrderServing from './orderServing';

class OrdersServing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            }
        }
    render() {
        return(
            <div className="orderServing-component">
                {this.props.serving.map(order => {
            return(
                <OrderServing {... order} key={order.id} />
            )
           
        })
    }
            </div>
        )
    }
}

export default OrdersServing;