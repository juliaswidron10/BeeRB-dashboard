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
                    <div className="bartender-icon-container">
                        <div className="bartender-icon"></div>
                    </div>
                    <p>{this.props.name}</p>
                    {/* <h2>Status</h2> */}
                    <p>{this.props.status}</p>

                    {/* <h2>Status Detail</h2> */}
                    <p>{this.props.statusDetail}</p>

                    {/* <h2>Serving Customer</h2> */}
                    <p>#{this.props.servingCustomer}</p>

                    {/* <h2>Using Tap</h2> */}
                    <p>{this.props.usingTap}</p>    
            </div>
        )
    }
}

export default Bartender;