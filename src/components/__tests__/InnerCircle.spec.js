/*global expect, test */
import React from 'react'
import renderer from 'react-test-renderer'
import InnerCircle from '../InnerCircle'

const component = (props) => renderer.create(
  <InnerCircle {...props} />
)

test('render when current is set', () => {
  let props = {
    item: {
      action: 'http://google.se',
      image: '/path/to/img',
      title: 'whoops'
    },
    outerRadius: 200
  }

  let tree = component(props).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render when current is not set', () => {
  let props = {
    outerRadius: 200
  }

  let tree = component(props).toJSON()
  expect(tree).toMatchSnapshot()
})

test('render when no image is set', () => {
  let props = {
    item: {
      action: 'http://google.se',
      title: 'whoops'
    },
    outerRadius: 200
  }

  let tree = component(props).toJSON()
  expect(tree).toMatchSnapshot()
})
