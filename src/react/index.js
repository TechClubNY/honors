import React from 'react';
import Credit from './components/credit';
import Popup from './components/popup';

class Honors extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showPopup: false
        }
    }

    render(){
        <div>
            <Credit onClick={ ()=>this.setState({showPopup: true}) }/>
            <Popup
                show={this.state.showPopup}
                onClick={ ()=>this.setState({showPopup: false}) }
                />
        </div>
    }
}

export default Honors;