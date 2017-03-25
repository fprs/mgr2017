import React, { Component, PropTypes } from 'react'
// import style from './style.css'

const propTypes = {
    consoleData: PropTypes.object
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
        this.consoleWrite = this.consoleWrite.bind(this)        
    }

    componentWillReceiveProps(nextProps) {
        const { consoleData: { databaseName, text } } = nextProps
        this.setState({consoleText: {
                ...this.state.consoleText,
                [databaseName]: text
            }
        })
    }

    consoleWrite(consoleData) {
        return Object.keys(consoleData).map((k, i) => (
            <div key={i}>
                <p>{`${k}:`}</p>
                <p>{consoleData[k]}</p>
            </div>
        ))
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
                    {
                    consoleText 
                        ? this.consoleWrite(consoleText)
                        : 'Click any button to start ...'
                    }
                </div>
            </div>
        )
    }
}

Console.propTypes = propTypes

Console.defaultProps = defaultProps

export default Console
