import React, { Component, PropTypes } from 'react'
// import style from './style.css'

const propTypes = {
    passDataToConsole: PropTypes.func,
    name: PropTypes.string
}

const defaultProps = {
    defaultProps
}

class SingleApiPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { name, passDataToConsole } = this.props
        return (
            <div>
                <button>{name}</button>
            </div>
        )
    }
}

SingleApiPanel.propTypes = propTypes

SingleApiPanel.defaultProps = defaultProps

export default SingleApiPanel
