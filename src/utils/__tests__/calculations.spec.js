/*global expect, test */
import { getX, getY, getCircleX, getCircleY, getAngleBetween } from '../calculations'

test('getX', () => {
  let res = getX(500, 300, 60)
  expect(Math.round(res)).toEqual(Math.round(650))

  res = getX(100, 500, 150)
  expect(Math.round(res)).toEqual(Math.round(-333.01270189221935))
})

test('getY', () => {
  let res = getY(50, 300, 45)
  expect(Math.round(res)).toEqual(Math.round(262.132034356))

  res = getY(100, 500, 150)
  expect(Math.round(res)).toEqual(Math.round(350))
})

test('getCircleX', () => {
  let res = getCircleX(800, 19)
  expect(Math.round(res)).toEqual(Math.round(1556.4148604795))

  res = getCircleX(20, 230)
  expect(Math.round(res)).toEqual(Math.round(7.1442478063))
})

test('getCircleY', () => {
  let res = getCircleY(300, 110)
  expect(Math.round(res)).toEqual(Math.round(581.9077862358))

  res = getCircleY(100, 35)
  expect(Math.round(res)).toEqual(Math.round(157.3576436351))
})

test('getAngleBetween two angles', () => {
  let res = getAngleBetween(150, 300)
  expect(res).toEqual(225)

  res = getAngleBetween(-300, -150)
  expect(res).toEqual(-225)

  res = getAngleBetween(-150, 150)
  expect(res).toEqual(0)

  res = getAngleBetween(-120, -30)
  expect(res).toEqual(-75)

})
