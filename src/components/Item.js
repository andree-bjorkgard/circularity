import React from 'react'
import cxs from 'cxs/monolithic'
import {getCircleX, getCircleY, getX, getY, getAngleBetween} from '../utils/calculations'

const s = {
  link: {
    path:{
      transition: 'fill 100ms ease',
      ':hover': {
        fill: '#30C0FF'
      }
    },
    use:{
      transition: 'fill 100ms ease',
      ':hover': {
        fill: '#30C0FF'
      }
    }
  }
}

const getPieData = (r, initialAngle, inc, centerX = r, centerY = r) => {

  const x1 = getCircleX(r, initialAngle)
  const y1 = getCircleY(r, initialAngle)
  const x2 = getCircleX(r, initialAngle + inc)
  const y2 = getCircleY(r, initialAngle + inc)

  return `M${centerX},${centerY} L${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2} z`
}

const Item = ({item, radius, initialAngle, increment, actions}) => (
  <a onMouseEnter={() => actions.hovered(item)} onMouseLeave={() => actions.unHovered(item)} className={cxs(s.link)} href={item.action}>
    <path
      d={getPieData(radius, initialAngle, increment)}
      fill="#E0E0E0"
      stroke="#cecece"
      strokeWidth="1" />
    <image
      style={{color: '#404040'}}
      transform={`translate(-${ radius * 0.1 } -${ radius * 0.1 })`}
      width={`${radius * 0.2}px`}
      height={`${radius * 0.2}px`}
      x={getX(radius, (radius * 0.78), getAngleBetween(initialAngle, initialAngle + increment))}
      y={getY(radius, (radius * 0.78), getAngleBetween(initialAngle, initialAngle + increment))}
      xlinkHref={item.image}
    />
  </a>
)

Item.propTypes = {
  item: React.PropTypes.shape({
    action: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func
    ]),
    image: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  radius: React.PropTypes.number,
  initialAngle: React.PropTypes.number,
  increment: React.PropTypes.number,
  actions: React.PropTypes.object
}

export default Item
