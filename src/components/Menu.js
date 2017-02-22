import React, {Component} from 'react'
import Item from './Item'
import InnerCircle from './InnerCircle'

class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hovered: {}
    }
  }

  hovered(item){
    if(item !== this.state.hovered)
      this.setState({hovered: item})
  }

  unHovered(item){
    if(item === this.state.hovered)
      this.setState({hovered: {}})
  }

  getItemActions(){
    return {
      hovered: this.hovered.bind(this),
      unHovered: this.unHovered.bind(this)
    }
  }

  getItems(items, diameter) {
    const north = -90
    const angle = ((1 / items.length) * 360)
    const radius = diameter / 2

    return items.map((item, index) => (
      <Item key={index} item={item} actions={this.getItemActions()} radius={radius} angle={angle} initialAngle={(angle * index) + north} increment={angle} />
    ))
  }

  render() {
    const {items, diameter} = this.props

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} preserveAspectRatio="xMidYMid meet">
        {this.getItems(items, diameter)}
        <InnerCircle current={this.state.hovered} diameter={diameter} />
      </svg>
    )
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  diameter: React.PropTypes.number,
}

export default Menu
