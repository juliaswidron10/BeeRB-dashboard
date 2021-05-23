import React from 'react';
// import { setState } from 'react';

class Taps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           taps: [],
        }
    }

    render() {
        return(
            <div>
              <h1>Current status of Taps</h1>
              <table className="tapsstatus">
                  <thead>
                  <tr>
                      <th>Name of the beer</th>
                      <th>Tap Number</th>
                      <th>Capacity</th>
                      <th>Level</th>
                      <th>In use</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.taps.map(tap => {
                //    { while(tap.level < 500){
                //     console.log(`tap ${tap.id} low level`);
                //     // document.querySelector(`tap${tap.id}level`).classList.add('lowstock');
                // }}
            return(
                <tr  key={tap.id} className={`tap${tap.id}level`}>
                    <td>{tap.beer}</td>
                    <td>{tap.id}</td>
                    <td>{tap.capacity}</td> 
                    <td>{tap.level}</td>
                    <td>{tap.inUse ? 'yes' : 'no'}</td>
              </tr>
            )
            
        })
    }
                  </tbody>
              </table>
            </div>
        )
    }

}

// let storage;



  
export default Taps;