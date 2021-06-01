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

/*         const checkIfNoTap = (usingTap) => {
            if(usingTap == null){
                return '-'
            } else{
                return 'usingTap'
            }
        } */

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

                {/* <div className={checkIfNoTap(this.props.usingTap)} >{this.props.usingTap}</div> */}
                <p>#{this.props.usingTap}</p>  

                <div className="border"></div>
            </div>

        )
    }
}

export default Bartender;