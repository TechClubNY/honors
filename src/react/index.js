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
            siteData: {},
            contributors: []
        }
    }

    componentDidMount(){
        fetch(`https://techclubny.github.io/honors/data/projects/${this.props.id}.json`).then( res => res.json() )
        .then( sitedata => {

            this.setState({siteData: sitedata});

            if(sitedata.github){
                fetch(`https://api.github.com/repos/${sitedata.github.org}/${sitedata.github.repo}/stats/contributors`).then( res => res.json() )
                .then( data => {
                  if(data && data.length){
                      let list = data.reverse().map( item=>item.author)
                      this.setState({ contributors: this.state.contributors.concat(list)})
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
                site={this.state.siteData.site}
                description={this.state.siteData.description}
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