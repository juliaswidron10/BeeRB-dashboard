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
        // Adding classes to differ styles depending on stock level
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
              <h1>Taps status</h1>
              <table className="tapsstatus">
                  <div className="tapstatus-heading">
                  <thead>
                  <tr>
                      <th>Beer name</th>
                      <th>Tap number</th>
                      <th>In use</th>
                      {/* <th>Capacity</th> */}
                      <th>Tap level</th>
                      
                  </tr>
                  </thead>
                  </div>
                  <tbody>
                  {this.props.taps.map(tap => {
                  
            return(
                <tr  key={tap.id} className={checkifLow(tap.level)}>
                    <div className="tapsstatus-content">
                        <td>{tap.beer}</td>
                        <td>{tap.id}</td>
                        <td>{tap.inUse ? 'yes' : 'no'}</td>
                        {/* <td>{tap.capacity}</td>  */}
                        {/* <td><div className="capacity"><div className={checkifLow(tap.level)} >{tap.level}/2500</div> </div></td> */}
                        <td><div className="capacity"><div className={checkifLow(tap.level)} ></div> </div></td>
                    </div>
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

export default Taps;