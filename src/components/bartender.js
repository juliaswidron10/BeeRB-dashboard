import React from 'react';

class Bartender extends React.Component {
   
    render(){
        return(
            <div>
                <div className="bartender-icon-container">
                    <div className="bartender-icon"></div>
                </div>

                <div className="border"></div>

                <p>{this.props.name}</p>

                <div className="border"></div>

                <p>{this.props.status}</p>

                <div className="border"></div>

                <p>{this.props.statusDetail}</p>

                <div className="border"></div>
                
                <p>#{this.props.servingCustomer}</p>
                
                <div className="border"></div>

                <p>#{this.props.usingTap}</p>  

                <div className="border"></div>
            </div>

        )
    }
}

export default Bartender;