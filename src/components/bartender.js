import React from 'react';

class Bartender extends React.Component {

    render(){
        const cleanUpStatus = (status) =>{
           let newstatus = status;
           newstatus = newstatus.split(/(?=[A-Z])/).join(" ");
           newstatus = newstatus[0].toUpperCase() + newstatus.substring(1);
           return newstatus
        }
        const getClassBartender = (status) =>{
            if(status === 'WORKING'){
               return 'working'
            }else if( status === 'READY'){
                return 'ready'
            }else{
                return 'serving'
            }  
        }
        const showTab = (num) =>{
            if(num > 0){
                return `#${num}`
            }else{
                return '-'
            }
        }
        return(
            <div>
                <div className="bartender-icon-container">
                    <div className="bartender-icon"></div>
                </div>

                <div className="border"></div>

                <p>{this.props.name}</p>

                <div className="border"></div>

                <p className={getClassBartender(this.props.status)}>{this.props.status}</p>

                <div className="border"></div>

                <p>{cleanUpStatus(this.props.statusDetail)}</p>

                <div className="border"></div>
                
                <p>{showTab(this.props.servingCustomer)}</p>
                
                <div className="border"></div>

                <p>{showTab(this.props.usingTap)}</p>  

                <div className="border"></div>
            </div>

        )
    }
}

export default Bartender;