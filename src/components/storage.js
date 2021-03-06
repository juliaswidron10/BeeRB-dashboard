import React from 'react';

class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       storage: []
    }
}
    render(){
/*         const checkifLow = (taplevel) => {
            if(taplevel <= 2 ){
                return 'lowstock'
            } else{
                return 'highstock'
            }
        } */

        const checkifLow = (taplevel) => {
            if(taplevel < 3 ){
                return 'lowstock'
            }else if(taplevel > 3 && taplevel < 5){
                return 'mediumlowstock'
            } else if(taplevel > 5 && taplevel < 8){
                return 'mediumhighstock'
            }else{
                return 'highstock'
            }
        }

        return(
            <div>
              <h1>Kegs storage</h1>
              <table className="storagestatus">
              <div className="storagestatus-heading">
                 <thead>
                 <tr>
                      <th>Beer name</th>
                      <th>Keg Amount</th>
                  </tr>
                  </thead>
                </div>
                  <tbody>
                  {this.props.storage.map(storage => {
            return(
                <tr key={storage.name} className={checkifLow(storage.amount)}>
                    <div className="storagestatus-content">
                        <td>{storage.name}</td>
                        <div className="amount-circle">
                            <td>{storage.amount}</td>
                        </div>
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

// // let storage;
// const handleData = (data) => {
//     console.log(data);
//     let storage = data.storage;
//     console.log(storage);
//     for(let i=0; i < storage.length ; i++) {
//         let table = document.querySelector('.storagestatus');
//         let row = table.insertRow(1);
//         let cell1 = row.insertCell(-1);
//         let cell2 = row.insertCell(-1);
//         cell1.innerHTML = storage[i].name;
//         cell2.innerHTML = storage[i].amount
//     }
//   }


  
export default Storage;