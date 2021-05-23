import React from 'react';

class Storage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       storage: []
    }
}
    render(){
        return(
            <div>
              <h1>Current status of storage</h1>
              <table className="storagestatus">
                 <thead>
                 <tr>
                      <th>Name of the beer</th>
                      <th>storage</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.storage.map(storage => {
            return(
                <tr key={storage.name}>
                    <td>{storage.name}</td>
                    <td>{storage.amount}</td> 
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