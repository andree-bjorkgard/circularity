import React, {Component} from 'react'
import cxs from 'cxs/monolithic'

const s = {
  link: {
    path:{
      transition: 'fill 200ms ease',
      ':hover': {
        fill: '#30C0FF'
      }
    }
  }
}

const getPieData = (radius, startAngle, endAngle) => {
  // Radius is always gonna be the same as the center of the cirle
  const x1 = radius + (radius * Math.cos(Math.PI * (startAngle/180)))
  const y1 = radius + (radius * Math.sin(Math.PI * (startAngle/180)))
  const x2 = radius + (radius * Math.cos(Math.PI * (endAngle/180)))
  const y2 = radius + (radius * Math.sin(Math.PI * (endAngle/180)))

  return `M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 0 1 ${x2},${y2} z`
}


const RadialItem = ({item, radius, startAngle, endAngle}) => (
  <a className={cxs(s.link)} href={item.route}>
    <path d={getPieData(radius, startAngle, endAngle)} fill="#E0E0E0" stroke="#cecece" strokeWidth="1" />
  </a>
)


RadialItem.propTypes = {
  item: React.PropTypes.object,
  radius: React.PropTypes.number,
  startAngle: React.PropTypes.number,
  endAngle: React.PropTypes.number
}

export default RadialItem
