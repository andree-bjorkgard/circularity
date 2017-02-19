const radians = (angle) => angle * (Math.PI / 180)
const getCoordinate = (fn, angle, r) => r * fn(radians(angle))

const getX = (offset, r, angle) => offset + getCoordinate(Math.cos, angle, r)
const getY = (offset, r, angle) => offset + getCoordinate(Math.sin, angle, r)

const getCircleX = (r, angle) => getX(r, r, angle)
const getCircleY = (r, angle) => getY(r, r, angle)

const getAngleBetween = (lowPoint, highPoint) => highPoint + ((lowPoint - highPoint) / 2)

export {getX, getY, getCircleX, getCircleY, getAngleBetween}
