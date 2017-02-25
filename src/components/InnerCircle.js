import React from 'react'
import { getX, getY } from '../utils/calculations'

const s = {
  innerCircle: {
    fill: '#fff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#404040'
  },
  text: {
    letterSpacing: '1px',
    fontWeight: 400,
    fill: '#404040'
  }
}

const defaults = {
  props: {
    item: { name: 'Menu' },
  },
  ratio: 0.57,
}

const getImage = (adjacent, image = null) => {
  if(!image)
    return null

  return (
    <image
      style={ { color: '#404040' } }
      height={ `${ adjacent * 0.7 }px` }
      width={ `${ adjacent * 0.7 }px` }
      x={ (adjacent - (adjacent * 0.7)) / 2 }
      y={ adjacent * 0.05 }
      xlinkHref={ image }
    />
  )
}

const getTitle = (adjacent, title) => {
  return (
    <text
      x={ adjacent / 2 }
      y={ adjacent * 0.95 }
      style={ s.text }
    >
      <tspan textAnchor="middle">{ title }</tspan>
    </text>
  )
}

const getContent = (item, outerRadius, radius, adjacent) => (
  <svg
    x={ getX(outerRadius, radius, -135) }
    y={ getY(outerRadius, radius, -135) }
    height={ adjacent }
    width={ adjacent }
  >
    { getImage(adjacent, item.image) }
    { getTitle(adjacent, item.name) }
  </svg>
)


const InnerCircle = ({ item, outerRadius }) => {
  const radius = outerRadius * defaults.ratio
  const adjacent = Math.sqrt(2) * radius

  return (
    <g>
      <circle
        style={ s.innerCircle }
        cx={ outerRadius }
        cy={ outerRadius }
        r={ radius }
      />
        { getContent(item, outerRadius, radius, adjacent) }
    </g>
  )
}

InnerCircle.defaultProps = defaults.props

InnerCircle.propTypes = {
  item: React.PropTypes.shape({
    action: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func,
    ]),
    image: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  }),
  outerRadius: React.PropTypes.number.isRequired,
}

export default InnerCircle
