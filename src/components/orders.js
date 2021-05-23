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
//   componentDidMount() {
//     // Simple GET request using fetch
//     fetch('https://beerb-exam.herokuapp.com/')
//         .then(response => response.json())
//         .then(data => handleData(data));

// }
    render() {
        // return ( <div >
        //     <Order id={'144'} time={'11:45'} orderitems={'Witbeer 3 IPA 1'}/>
        //     <Order id={'56'} time={'12:45'} orderitems={'Witbeer'}/>
        //     </div>
        // )
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

// const order = () =>{
//     console.log(ordersToday)
// }
// order();


// let order = {
//     time: '',
//     orderitems: [],
//     id: '',
//   }
  
  
//   const handleData = (data) => {
//     console.log(data);
//     let orders = data.queue;
   
//     for(let i = 0; i < orders.length ; i++){
//       // let newOrder = new order;
//       order.orderitems = data.queue.order;
//       order.time = data.queue.startTime;
//       order.id = data.queue.id;
//       console.log(order.id);
//     }
//   }
  


export default Orders;