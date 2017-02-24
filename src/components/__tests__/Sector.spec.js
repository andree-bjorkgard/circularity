/*global beforeEach, expect, jest, test */
import React from 'react'
import renderer from 'react-test-renderer'
import Sector from '../Sector'

let props

beforeEach(() => {
  props = {
    isHovered: false,
    item: { action: 'http://google.se', image: '/path/to/img', name: 'whoops' },
    onHoverChange: () => 33,
    parameters: {
      radius: 200,
      B: -90,
      C: -50,
    }
  }
})

const component = (props) => renderer.create(
    <Sector {...props} />
)

test('When hovered over sector, onHoverChange should be called', () => {
  const mock = jest.fn()
  props.onHoverChange = mock

  let tree = component(props).toJSON()
  tree.props.onMouseEnter()

  expect(mock).toHaveBeenCalled()
})

test('Fill color of sector changes when prop isHovered toggles', () => {
  props.isHovered = false
  let tree = component(props).toJSON()

  expect(tree).toMatchSnapshot()

  props.isHovered = true
  tree = component(props).toJSON()

  expect(tree).toMatchSnapshot()
})
