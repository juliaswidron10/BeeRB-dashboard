import React from 'react';
import Bartender from './bartender.js';

class Bartenders extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //         }
    //     }
    render() {
        return(
            <div className="bartenders-component">
                {this.props.bartenders.map(bartender => {
            return(
                <Bartender {... bartender} key={bartender.name} />
            )
           
        })
    }
            </div>
        )
    }
}

export default Bartenders;