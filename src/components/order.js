import React from 'react';
let finOrder = [];


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalOrder: []
            }
        }

    render(){
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
                let orderItem = `${prop} ${counts[prop]}`;
                console.log(orderItem)
                finOrder.push(orderItem)
                console.log(finOrder);
                }
            
            return finOrder;
        }
        cleanUpOrders(this.props.order);
        const cleanUpTimeStamp = (timestamp) =>{
            const unixTimestamp  = timestamp;
            const dateObject = new Date(unixTimestamp);
            const dateToDisplay = dateObject.toLocaleTimeString()
            return dateToDisplay
        
          }

        return(
            <div div className="queue-component">
                <h1> {this.props.id} </h1>
{/*                 <h2> Order placed </h2> 
                <p> {cleanUpTimeStamp(this.props.startTime) } </p>  */}
                {/* <h2> Items ordered </h2> */}
                <ul className="listOrder" >
                    {finOrder.map( order => {
                        return(
                            <li>{ order }</li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }

}
export default Order;