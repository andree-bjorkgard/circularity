import React from 'react'
import { getCircleX, getCircleY, getX, getY, getAngleBetween } from '../utils/calculations'

const getSectorData = (r, B, C, centerX = r, centerY = r) => {
  const x1 = getCircleX(r, B)
  const y1 = getCircleY(r, B)
  const x2 = getCircleX(r, C)
  const y2 = getCircleY(r, C)

  return `M${centerX},${centerY} L${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2} z`
}

const renderSector = ({ isHovered, parameters: { radius, B, C } }) => {
  const fill = isHovered ? '#30C0FF' : '#E0E0E0'

  return (
    <path
      style={ { transition: 'fill 150ms ease' } }
      d={ getSectorData(radius, B, C) }
      fill={ fill }
      stroke='#CECECE'
      strokeWidth='1'
    />
  )
}

const renderImage = ({ item, parameters: { radius, B, C } }) => (
  <image
    style={ { color: '#404040' } }
    transform={ `translate(-${ radius * 0.1 } -${ radius * 0.1 })` }
    width={ `${radius * 0.2}px` }
    height={ `${radius * 0.2}px` }
    x={ getX(radius, (radius * 0.78), getAngleBetween(B, C)) }
    y={ getY(radius, (radius * 0.78), getAngleBetween(B, C)) }
    xlinkHref={ item.image }
  />
)

const getAction = (action) => {
  if(typeof action === 'function')
    return { onClick: action }

  return { href: action, target: '_blank' }
}

const Sector = (props) => (
  <a
    onMouseEnter={ () => props.onHoverChange(props.index) }
    onMouseLeave={ () => props.onHoverChange(props.index) }
    { ...getAction(props.item.action) }
  >
    { renderSector(props) }
    { renderImage(props) }
  </a>
)

Sector.propTypes = {
  index: React.PropTypes.number.isRequired,
  isHovered: React.PropTypes.bool.isRequired,
  item: React.PropTypes.shape({
    action: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func,
    ]).isRequired,
    image: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
  onHoverChange: React.PropTypes.func.isRequired,
  parameters: React.PropTypes.shape({
    B: React.PropTypes.number,
    C: React.PropTypes.number,
    radius: React.PropTypes.number,
  }).isRequired
}

export default Sector
