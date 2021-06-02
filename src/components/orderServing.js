import React from 'react';
let finOrder = [];

class OrderServing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalOrder: []
            }
        }
        
    render() {
        
        const cleanUpOrders = (order) => {
            
            finOrder = [];
            console.log(order);
            const a = order;
            let counts = {}

            for(let i =0; i < a.length; i++){ 
                if (counts[a[i]]){
                    counts[a[i]] += 1
                } else {
                    counts[a[i]] = 1
                }
            }  
            for (let prop in counts){
                let orderItem = `${prop} x${counts[prop]}`;
                console.log(orderItem)
                finOrder.push(orderItem)
                console.log(finOrder);
                }
            
            return finOrder;
        }
        const cleanUpTimeStamp = (timestamp) =>{
            // let currentTime = Number(this.props.currenttime);
            // const now = Number(timestamp);
            // const unixTimestamp  = currentTime - now;
            // const dateObject = new Date(unixTimestamp);
            // const dateToDisplay = unixTimestamp.DateTimeFormat({minute:'numeric'});
            // const dateToDisplay = dateObject.toLocaleTimeString()
            const unixTimestamp  = timestamp;
            const dateObject = new Date(unixTimestamp);
            const dateToDisplay = dateObject.toLocaleTimeString()
            return dateToDisplay
        
          }
          
        cleanUpOrders(this.props.order);



        return(
            <div className="serving-component">
                <div className="heading-container">
                    <h1>{this.props.id}</h1>
                </div>
                {/* <h2>Ordered Items</h2> */}
                <ul className="listOrder" >
                    {finOrder.map( order => {
                        return(
                            <li>{ order }</li>
                        )
                    })
                    }
                </ul>
                <div className="ordertime-container">
                     <p><span>Order placed at: </span>{cleanUpTimeStamp(this.props.startTime) }</p>
                </div>

            </div>
        )
    }
}

export default OrderServing;