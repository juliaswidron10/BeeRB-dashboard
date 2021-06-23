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
            const a = order;
            let counts = {}

            for(let i =0; i < a.length; i++){ 
                if (counts[a[i]]){
                    counts[a[i]] += 1
                } else {
                    counts[a[i]] = 1
                }
            }  
            //create final order item to display it in a nice way
            for (let prop in counts){
                let orderItem = `${prop} x${counts[prop]}`;
                finOrder.push(orderItem)
                }
            
            return finOrder;
        }
        const cleanUpTimeStamp = (timestamp) =>{
            const unixTimestamp  = timestamp;
            const dateObject = new Date(unixTimestamp);
            const dateToDisplay = dateObject.toLocaleTimeString()
            return dateToDisplay
        
          }
        const getBartender = (id) => {
            console.log(id)
            let nametoReturn;
            this.props.bartenders.map(bartender => {
                if(bartender.servingCustomer === id){
                    nametoReturn = bartender.name
                }
                return nametoReturn;
            })
            return nametoReturn;
        }

        cleanUpOrders(this.props.order);



        return(
            <div className="serving-component">
                <div className="heading-container">
                    <h1>{this.props.id}</h1>
                    <p className="servingBartender">Serving: <strong>{getBartender(this.props.id)}</strong></p>
                        
                </div>
                
                <ul className="listOrder" >
                    {finOrder.map( order => {
                        return(
                            <li key={order}>{ order }</li>
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