import React from 'react';

const Overlay = () => <div className="tch_overlay" />
const Watermark = () => <div className="tch_watermark" />
const Tooltip = props => <div className="tch_tooltip" {...props} >{ props.children }</div>

class Popup extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showTooltip: false,
            tooltipLeft: 0,
            tooltipTop: 0,
            tooltipContent: null
        }
    }

    mouseEnterHandler(e, contributor){
        let offset = this.refs.content.getBoundingClientRect();
        this.setState({
            showTooltip: true,
            tooltipLeft: `${e.target.x - offset.left - e.target.width}px`,
            tooltipTop: `${e.target.y - offset.top - e.target.height}px`,
            tooltipContent: <p>{ contributor.name || contributor.login }</p>
        })
    }

    mouseLeaveHandler(e){
        this.setState({
            showTooltip: false
        })
    }

    render(){

        const { show, site, description, contributors, onClose } = this.props;

        const tooltipStyle = {
            display: this.state.showTooltip ? 'inherit': 'none',
            left: this.state.tooltipLeft,
            top: this.state.tooltipTop
        }

        return (
            <div className="tch_popup" style={{display: show ? 'flex' : 'none', opacity: show ? 1 : 0}}>
                <Overlay />
                <Watermark />
                <div className="tch_content" ref="content">
                    <Tooltip style={tooltipStyle}>{this.state.tooltipContent}</Tooltip>
                    <h4>Information</h4>
                    <p>Site: <span>{ site }</span></p>
                    <p>Description: <span>{ description }</span></p>
                    <h4>Contributors</h4>
                    <ul className="tch_contributors">
                        {
                            contributors.map( (contributor, i) => {
                                return (
                                    <li key={i}>
                                        <img
                                            src={contributor.avatar_url}
                                            onMouseEnter={ e => this.mouseEnterHandler(e, contributor) }
                                            onMouseLeave={ e => this.mouseLeaveHandler(e) }
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="tch_footer">
                        <a className="tch_button" href="http://techclub.nyc" taret="_blank" >About TechClub</a>
                        <span className="tch_button" onClick={e=>onClose(e)}>Thanks</span>
                    </div>
                </div>
            </div>
        )
    }
}

Popup.defaultProps = {
    show: false,
    site: '',
    description: '',
    contributors: [],
    onClose: ()=>false
}

export default Popup;