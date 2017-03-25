import React, { Component } from 'react'
import SingleApiPanel from './Components/SingleApiPanel/SingleApiPanel'
import Console from './Components/Console/Console'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = { consoleData: '' }

    this.passDataToConsole = this.passDataToConsole.bind(this)
  }

  passDataToConsole(text, databaseName) {
    this.setState({ consoleData: { text, databaseName } })
  }

  render() {
    const { consoleData } = this.state
    return (
      <div>
        <div style={{display: 'flex'}}>
          {['SQL', 'GraphQL', 'Redis'].map(name => <SingleApiPanel name={name} passDataToConsole={this.passDataToConsole} />)}
        </div>
        <Console consoleData={consoleData} />
      </div>
    )
  }
}
