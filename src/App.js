// import logo from './logo.svg';
import './App.scss';
import React from 'react';
// import { setState } from 'react';
import Orders from './components/orders';
import Bartenders from './components/bartenders';
import Taps from './components/taps';
import Storage from './components/storage';
import OrdersServing from './components/ordersServing';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     queue: [],
     bartenders: [],
     serving: [],
     storage: [],
     taps: []
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    const fetchData = () => {
      fetch('https://beerb-exam.herokuapp.com/')
      .then(response => response.json())
      .then(data => handleData(data));
    }
    
   const getData = () => {
    setInterval(fetchData, 1000);
  }
  
  getData();

  
  
  const handleData = (data) => {
    // console.log(data);
    // let orders = data.queue;
    this.setState(data);
    // console.log(orders)
  }
  
}

render(){
  const cleanUpTimeStamp = (timestamp) =>{
    const unixTimestamp  = timestamp;
    const dateObject = new Date(unixTimestamp);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat

  }
  return (

    <Router>
     <div className="App">
      <header>
        <div className="header-wrapper">
          <h1>FooBar</h1>
          <p className="timenow">{cleanUpTimeStamp(this.state.timestamp) }</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/bartenders">Bartenders</Link>
            </li>
          </ul>
        </nav>
      </header>
        
        <Switch>

          <Route path="/orders">
            <div className="orders-container-main" >
              <div className="orders-serving">
                <h1>Orders being served</h1>
                <OrdersServing currenttime={cleanUpTimeStamp(this.state.timestamp)} bartenders={this.state.bartenders} serving={this.state.serving}/>
              </div>

              <div className="orders-queue">
                <h1>Orders in the queue</h1>
                <Orders orders={this.state.queue}/>
              </div>
            </div>
          </Route>

          <Route path="/bartenders">
          <div className="bartenders">
                <h1>Bartenders working today</h1>
                <Bartenders bartenders={this.state.bartenders} />
              </div>
          </Route>

          <Route path="/inventory">
            <div className="inventory-container">
              <div className="storagesituation">
                <Storage storage={this.state.storage} />
              </div>
              <div className="tapssituatuion"> 
                <Taps taps={this.state.taps}/>
              </div>
            </div>
          </Route>

          
        </Switch>

      
     
     


    
     
    </div>
    </Router>
    
  );
}
  
}


// let tabsToday = {
//   taps: [],
//   storage: [],
// }

// let ordersToday = {
//   bartenders: [],
//   orders: [],
//   serving: [],
// }

// let order = {
//   time: '',
//   orderitems: [],
//   id: '',
// }



export default App;

