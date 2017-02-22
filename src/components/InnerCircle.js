import React from 'react'
import cxs from 'cxs/monolithic'
import {getX, getY} from '../utils/calculations'

const s = {
  innerCircle: {
    fill: '#fff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#404040'
  },
  innerContent: {
    overflow: 'visible'
  },
  text: {
    letterSpacing: '1px',
    fontWeight: 400,
    fill: '#404040'
  }
}

const circlePercentage = 0.57

const InnerCircle = ({current, diameter}) => {
  const outerRadius = diameter / 2
  const innerRadius = outerRadius * circlePercentage
  let title = current.name ||  'Menu'
  let image = current.image || null
  let innerAdjacent = Math.sqrt(2) * innerRadius

  return (
    <g>
      <circle className={cxs(s.innerCircle)} cx={outerRadius} cy={outerRadius} r={innerRadius} />
      <svg className={cxs(s.innerContent)} x={getX(outerRadius,innerRadius, -135)} y={getY(outerRadius,innerRadius, -135)} width={innerAdjacent} height={innerAdjacent} >
        <image
          style={{color: '#404040'}}
          width={`${innerAdjacent * 0.7}px`}
          height={`${innerAdjacent * 0.7}px`}
          x={(innerAdjacent - (innerAdjacent * 0.7)) / 2} y={innerAdjacent * 0.05}
          xlinkHref={image}
        />
        <text x={innerAdjacent/2} y={innerAdjacent * 0.95} className={cxs(s.text)}>
          <tspan textAnchor="middle">{title}</tspan>
        </text>
      </svg>
    </g>
  )
}

InnerCircle.propTypes = {
  current: React.PropTypes.object,
  diameter: React.PropTypes.number,
}

export default InnerCircle
