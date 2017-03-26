import React, { Component, PropTypes } from 'react'
// import style from './style.css'

const propTypes = {
    passDataToConsole: PropTypes.func,
    name: PropTypes.string,
    active: PropTypes.bool
}

const defaultProps = {
    defaultProps
}

class SingleApiPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick() {
        const { name, passDataToConsole } = this.props
        const d = Date.now()
        const promises = [1,1,1,1,1].map(() => new Promise((resolve, reject) => {
                const now = Date.now()
                passDataToConsole(`Started ${name} request`, name, false)
                setTimeout(() => resolve(now), Math.random()*600+400)
            }
        ))
        Promise.all(promises).then(d => {
            passDataToConsole(`All promises from ${name} resolved in ${Date.now() - Math.max(...d)} ms`, name, true)
        })
    }

    render() {
        const { name, passDataToConsole, active } = this.props
        return (
            <div>
                <button onClick={this.onButtonClick} disabled={!active}>{name}</button>
            </div>
        )
    }
}

SingleApiPanel.propTypes = propTypes

SingleApiPanel.defaultProps = defaultProps

export default SingleApiPanel
