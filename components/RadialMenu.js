import React from 'react'
import cxs from 'cxs/monolithic'
import RadialItem from './RadialItem'

const s = {
  innerCircle: {
    fill: '#fff',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#404040',
    h3: {
      letterSpacing: '1px',
      fontWeight: 300
    }
  }
}

const getItems = (items, diameter) => {
  const initialAngle = -90
  const angle = ((1 / items.length) * 360)
  const radius = diameter / 2

  return items.map((item, index) => (
    <RadialItem key={index} item={item} radius={radius} startAngle={(angle * index) + initialAngle} endAngle={((angle * index) + angle) + initialAngle} />
  ))
}

const RadialMenu = ({ items, diameter }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={diameter} height={diameter}>
    {getItems(items, diameter)}
    <circle className={cxs(s.innerCircle)} cx={diameter / 2} cy={diameter / 2} r={(diameter / 2) * 0.57} />
  </svg>
)

RadialMenu.propTypes = {
  items: React.PropTypes.array,
  diameter: React.PropTypes.number,
}

export default RadialMenu
