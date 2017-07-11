import React from 'react';

const Overlay = () => <div className="tch_overlay" />
const Watermark = () => <div className="tch_watermark" />

const Popup  = props => (
    <div className="tch_popup" style={{display: props.show ? 'flex' : 'none', opacity: props.show ? 1 : 0}}>
        <Overlay />
        <Watermark />
        <div className="content">
            <h4>Information</h4>
            <p>Site: <span>{ props.site }</span></p>
            <p>Description: <span>{ props.description }</span></p>
            <h4>Contributors</h4>
            <ul className="tch_contributors">
                {
                    props.contributors.map( contributor => {
                        return (
                            <li>
                                <img src={contributor.avatar_url} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tch_footer">
                <span className="tch_button" onClick={e=>props.onClose(e)}>Thanks</span>
            </div>
        </div>
    </div>
)

Popup.defaultProps = {
    show: false,
    site: '',
    description: '',
    contributors: [],
    onClose: ()=>false
}

export default Popup;