import React, { Component, PropTypes } from 'react'
// import style from './style.css'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Console extends Component {
    constructor(props) {
        super(props)
        this.state = {
            consoleText: ''
        }        
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        const { consoleText } = this.state
        return (
            <div>
                <h1>Console:</h1>
                <div style={{
                        border: '1px solid gray',
                        padding: 20
                    }}
                >
                    {consoleText || 'Click any button to start ...'}
                </div>
            </div>
        )
    }
}

Console.propTypes = propTypes

Console.defaultProps = defaultProps

export default Console
