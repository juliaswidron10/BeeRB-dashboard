import React from 'react';
let finOrder = [];


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalOrder: [],
            key: props.id
            }
        }

    render(){
        const cleanUpOrders = (order) => {
            
            finOrder = [];
            const a = order;
            let counts = {}

            for(let i =0; i < a.length; i++){ 
                if (counts[a[i]]){
                    counts[a[i]] += 1
                } else {
                    counts[a[i]] = 1
                }
            }  
            //create order items and add them to final Order array that will be displayed
            for (let prop in counts){
                let orderItem = `${prop} x${counts[prop]}`;
                finOrder.push(orderItem)
                }
            
            return finOrder;
        }
        cleanUpOrders(this.props.order);
        // const cleanUpTimeStamp = (timestamp) =>{
        //     const unixTimestamp  = timestamp;
        //     const dateObject = new Date(unixTimestamp);
        //     const dateToDisplay = dateObject.toLocaleTimeString()
        //     return dateToDisplay
        
        //   }
        return(
            <div className="queue-component">
                <div className="heading-container">
                    <h1> {this.props.id} </h1>
                </div>
                <ul className="listOrder" >
                    {finOrder.map( order => {
                        return(
                            <li key={order}>{ order }</li>
                        )
                    })

                    }
                </ul>
               
            </div>
        )
    }

}
export default Order;