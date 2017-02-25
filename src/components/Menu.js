import React, { Component } from 'react'
import Sector from './Sector'
import InnerCircle from './InnerCircle'

class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hoveredItemIndex: null
    }
    this.updateHovered = this.updateHovered.bind(this)
  }

  updateHovered(index){
    if(index !== this.state.hoveredItemIndex)
      return this.setState({ hoveredItemIndex: index })

    this.setState({ hoveredItemIndex: null })
  }

  getItems(diameter, items, hoveredIndex) {
    const north = -90
    const angle = (1 / items.length) * 360
    const radius = diameter / 2

    return items.map((item, index) => {
      const B = (angle * index) + north

      return (
        <Sector
          key={ index }
          index={ index }
          item={ item }
          isHovered={ index === hoveredIndex }
          onHoverChange={ this.updateHovered }
          parameters={{
            radius: radius,
            B: B,
            C: B + angle
          }}
        />
      )
    })
  }

  getInnerCircle(diameter, item){
    return (
      <InnerCircle
        item={ item }
        outerRadius={ diameter / 2 }
      />
    )
  }

  render() {
    const { diameter, items } = this.props
    const { hoveredItemIndex } = this.state

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={ diameter } height={ diameter } preserveAspectRatio="xMidYMid meet">
        { this.getItems(diameter, items, hoveredItemIndex) }
        { this.getInnerCircle(diameter, items[hoveredItemIndex]) }
      </svg>
    )
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  diameter: React.PropTypes.number,
}

export default Menu
