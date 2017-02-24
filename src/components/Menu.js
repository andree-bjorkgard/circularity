import React, { Component } from 'react'
import Sector from './Sector'
import InnerCircle from './InnerCircle'

class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hoveredItemIndex: null
    }
    this.updateHovered.bind(this)
  }

  updateHovered(index){
    if(index !== this.state.hoveredItemIndex)
      return this.setState({ hoveredItemIndex: index })

    this.setState({ hoveredItemIndex: null })
  }

  getItems({ items, diameter }, hoveredIndex) {
    const north = -90
    const angle = (1 / items.length) * 360
    const radius = diameter / 2

    return items.map((item, index) => {
      const B = (angle * index) + north

      return (
        <Sector
          key={ index }
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

  getInnerCircle({ items, diameter }, index){
    const current = (index !== null) ? items[index] : {}

    return (
      <InnerCircle
        current={ current }
        diameter={ diameter }
      />
    )
  }

  render() {
    const { diameter } = this.props

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter} preserveAspectRatio="xMidYMid meet">
        { this.getItems(this.props, this.state.hoveredItemIndex) }
        { this.getInnerCircle(this.props, this.state.hoveredItemIndex) }
      </svg>
    )
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  diameter: React.PropTypes.number,
}

export default Menu
