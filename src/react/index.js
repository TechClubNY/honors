/* eslint-disable no-undef */
require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import Credit from './components/credit';
import Popup from './components/popup';

class Honors extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showPopup: false,
            contributors: []
        }
    }

    componentDidMount(){
        fetch(`https://techclubny.github.io/honors/data/projects/${props.id}.json`).then( res => res.json() )
        .then( sitedata => {
            if(sitedata.github){
                fetch(`https://api.github.com/repos/${sitedata.github.org}/${sitedata.github.repo}/stats/contributors`).then( res => res.json() )
                .then( data => {
                  if(data && data.length){
                      this.setState({ contributors: this.state.contributors.concat(data.reverse())})
                  }
                })
            }

            if(sitedata.contributors && sitedata.contributors.length){
                  this.setState({ contributors: this.state.contributors.concat(sitedata.contributors)})
              }
        })
    }

    render(){

        return (
        <div>
            <Credit onClick={ ()=>this.setState({showPopup: true}) }/>
            <Popup
                show={this.state.showPopup}
                onClose={ ()=>this.setState({showPopup: false}) }
                contributors={this.state.contributors}
                />
        </div>
        )
    }
}

Honors.defaultProps = {
    id: 0
}

export default Honors;