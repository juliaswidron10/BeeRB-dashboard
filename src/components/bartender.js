import React from 'react';

class Bartender extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         servingCustomer: '',
    //         status: '',
    //         statusdetail: '',
    //         usingaTab: false,
    //     }
    // }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <div>
                    <h2>Serving Customer</h2>
                    <p>{this.props.servingCustomer}</p>

                    <h2>Status</h2>
                    <p>{this.props.status}</p>

                    <h2>Status Details</h2>
                    <p>{this.props.statusDetail}</p>


                    <h2>Using Tab</h2>
                    <p>{this.props.usingTap}</p>
               </div> 
        
            </div>
        )
    }
}

export default Bartender;