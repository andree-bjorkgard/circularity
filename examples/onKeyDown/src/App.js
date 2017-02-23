import React, {Component} from 'react'
import Circularity from 'circularity'

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
    fontSize: 28
  },
  header: {
    fontSize: 40,
    margin: -10
  }
}

const state = {
  modules: [
    {
      name: 'Github',
      image: '/svg/github.svg',
      action: 'https://github.com/ingenalls/circularity'
    },
    {
      name: 'npm',
      image: '/svg/npm.svg',
      action: 'https://www.npmjs.com/package/circularity'
    },
    {
      name: 'React',
      image: '/svg/react.svg',
      action: 'https://facebook.github.io/react/'
    },
    {
      name: 'Travis CI',
      image: '/svg/travis.svg',
      action: 'https://travis-ci.org/'
    },
    {
      name: 'Status',
      image: 'https://travis-ci.org/ingenalls/circularity.svg?branch=master',
      action: 'https://travis-ci.org/ingenalls/circularity'
    }
  ],
  position: null,
  diameter: 400,
  triggerKeyCode: 16

}

class App extends Component{

  constructor(props){
    super(props)
    this.showMenu = this.showMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.state = state
  }

  showMenu(e){
    if(e.keyCode === this.state.triggerKeyCode){
      this.setState({showMenu: this.state.position})
      document.addEventListener('keyup', this.hideMenu, false)
    }
  }

  hideMenu(e){

    if(e.keyCode === this.state.triggerKeyCode){
      document.removeEventListener('keyup', this.hideMenu, false)
      this.setState({showMenu: null})
    }
  }


  componentDidMount(){
    document.addEventListener('keydown', this.showMenu, false)
    document.addEventListener('mousemove', (e) => this.setState({position: { x: e.clientX , y: e.clientY }}), false)
  }

  getCssPositioning(position, radius){
    return {
      zIndex: '1000',
      position: 'absolute',
      left: `${position.x - radius}px`, top: `${position.y - radius}px`
    }
  }

  renderMenu({ showMenu, diameter, modules}){
    if(showMenu){
      const pos = this.getCssPositioning(showMenu, diameter / 2)

      return (
        <div style={pos}>
          <Circularity diameter={diameter} items={modules} />
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div style={style.main}>
        <h4 style={style.header}>Circularity</h4>
        <p>Press and hold shift</p>
        {this.renderMenu(this.state)}
      </div>
    )
  }
}

export default App
