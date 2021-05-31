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
        const checkifLow = (taplevel) => {
            if(taplevel < 500 ){
                return 'lowstock'
            }else if(taplevel > 500 && taplevel < 1250){
                return 'mediumlowstock'
            } else if(taplevel > 1250 && taplevel < 1750){
                return 'mediumhighstock'
            }else{
                return 'highstock'
            }
        }
        return(
            <div>
              <h1>Current status of Taps</h1>
              <table className="tapsstatus">
                  <thead>
                  <tr>
                      <th>Name of the beer</th>
                      <th>Tap Number</th>
                      <th>In use</th>
                      <th>Capacity</th>
                      <th>Level</th>
                      
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.taps.map(tap => {
                  
            return(
                <tr  key={tap.id} className={checkifLow(tap.level)}>
                    <td>{tap.beer}</td>
                    <td>{tap.id}</td>
                    <td>{tap.inUse ? 'yes' : 'no'}</td>
                    <td>{tap.capacity}</td> 
                    <td><div className="capacity"><div className={checkifLow(tap.level)} >{tap.level}</div> </div></td>
                    
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