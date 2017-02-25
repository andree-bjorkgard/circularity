import React, { Component } from 'react'
import Circularity from 'circularity'

const randomString = (length) => {
  return Math
    .round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))
    .toString(36)
    .slice(1)
}

const style = {
  main: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#81868c',
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 28,
    userSelect: 'none',
  },
  header: {
    fontSize: 40,
    margin: -10
  }
}

const items = [
  {
    title: 'Github',
    image: '/svg/github.svg',
    action: 'https://github.com/ingenalls/circularity'
  },
  {
    title: 'npm',
    image: '/svg/npm.svg',
    action: 'https://www.npmjs.com/package/circularity'
  },
  {
    title: 'Travis CI',
    image: '/svg/travis.svg',
    action: 'https://travis-ci.org/'
  },
  {
    title: 'Status',
    image: 'https://travis-ci.org/ingenalls/circularity.svg?branch=master',
    action: 'https://travis-ci.org/ingenalls/circularity'
  }
]

const state = {
  position: null,
  diameter: 400,
  triggerKeyCode: 16,
  alerts: {},
}

class App extends Component{

  constructor(props){
    super(props)
    this.showMenu = this.showMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.toggleOpacityOnAlert = this.toggleOpacityOnAlert.bind(this)
    this.state = state
    this.items = items

    this.items.push({
      title: 'Alert me',
      image: '/svg/alert.svg',
      action: this.triggerAlert.bind(this)
    })
  }

  componentDidMount(){
    document.addEventListener('keydown', this.showMenu, false)
    document.addEventListener('mousemove', (e) => this.setState({ position: { x: e.clientX , y: e.clientY } }), false)
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.position !== nextState.position)
      return false

    return true
  }

  showMenu(e){
    if(e.keyCode === this.state.triggerKeyCode){
      this.setState({ showMenu: this.state.position })
      document.addEventListener('keyup', this.hideMenu, false)
    }
  }

  hideMenu(e){
    if(e.keyCode === this.state.triggerKeyCode){
      document.removeEventListener('keyup', this.hideMenu, false)
      this.setState({ showMenu: null })
    }
  }

  getCssPositioning(position, radius){
    return {
      zIndex: '1000',
      position: 'absolute',
      left: `${position.x - radius}px`, top: `${position.y - radius}px`
    }
  }

  renderMenu({ showMenu, diameter }, items){
    if(showMenu){
      const pos = this.getCssPositioning(showMenu, diameter / 2)

      return (
        <div style={pos}>
          <Circularity diameter={diameter} items={items} />
        </div>
      )
    }

    return null
  }

  getAlert(key, alert){
    return (
      <div key={key} style={ { transition: 'opacity 1000ms', opacity: alert.opacity } }>
        <p>You clicked on the alert</p>
      </div>
    )
  }

  toggleOpacityOnAlert(id, opacity){
    const alerts = { ...this.state.alerts }
    alerts[id] = {
      opacity: opacity
    }
    this.setState({ alerts: alerts })
  }

  triggerAlert(){
    const id = randomString(8)
    this.toggleOpacityOnAlert(id, 0)

    // fade in
    setTimeout(() => this.toggleOpacityOnAlert(id, 1), 10)
    // fade out
    setTimeout(() => this.toggleOpacityOnAlert(id, 0), 4000)
    // remove
    setTimeout(() => {
      const alerts = { ...this.state.alerts }
      delete alerts[id]
      this.setState({ alerts: alerts })
    }, 5000)
  }

  renderAlerts(alerts){
    return (
      <div style={ { position: 'absolute', top: 5, left: 5, padding: '0 25px' } }>
        { Object.keys(alerts).map((key) => this.getAlert(key, this.state.alerts[key])) }
      </div>
    )
  }

  render() {
    return (
      <div style={ style.main }>
        <h4 style={ style.header }>Circularity</h4>
        <p>Press and hold shift</p>
        { this.renderMenu(this.state, this.items) }
        { this.renderAlerts(this.state.alerts) }
      </div>
    )
  }
}

export default App
