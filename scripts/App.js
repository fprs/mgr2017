import React, { Component } from 'react'
import SingleApiPanel from './Components/SingleApiPanel/SingleApiPanel'
import Console from './Components/Console/Console'

export default class App extends Component {
  constructor(props){
    super(props)

    this.buttons = ['SQL', 'Mongo', 'Redis']

    this.state = { 
      consoleData: {},
      buttonsActive: this.buttons.reduce((prev, curr) => ({ ...prev, [curr]: true }), {})
    }

    this.passDataToConsole = this.passDataToConsole.bind(this)
  }

  passDataToConsole(text, databaseName, isFinished) {
    this.setState({ 
      consoleData: { text, databaseName },
      buttonsActive: {
        ...this.state.buttonsActive,
        [databaseName]: isFinished
      }
    })
  }

  render() {
    const { consoleData, buttonsActive } = this.state
    return (
      <div>
        <div style={{display: 'flex'}}>
          {
            this.buttons.map((name, i) => (
              <SingleApiPanel
                name={name} key={i}
                passDataToConsole={this.passDataToConsole}
                active={buttonsActive[name]}
              />
            ))
          }
        </div>
        <Console consoleData={consoleData} />
      </div>
    )
  }
}
