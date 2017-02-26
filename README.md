[![Build Status](https://travis-ci.org/ingenalls/circularity.svg?branch=master)](https://travis-ci.org/ingenalls/circularity)
[![npm](https://img.shields.io/npm/v/circularity.svg)](https://www.npmjs.com/package/circularity)
# Circularity

#### Everything is subject to change while it's below a major version. However, examples will be updated with the latest changes.

## About
Circularity is a circular/radial menu built for React. The navigation can either be links or actions passed. See more in usage.

## Examples
Examples can be found inside the examples directory. 
They are set up with create-react-app, so they are easy to start and test out.


## Installation

#### With npm
```
npm install --save circularity
```
#### with yarn
```
yarn add circularity
```

## Usage

Circularity takes two props
 - diameter - optional - An integer/number deciding how big the radial menu will be, defaults to 400 
 - items - required - an array of objects which wants a title, image-url and an action. Action can be either a string(url) or a function
```
[
  {
    title: 'Menu Title',
    image: 'url/to/image',
    action: 'http://someurl.com' 
  },
  {
    title: 'Menu Title',
    image: 'url/to/image',
    action: () => { do what you want }
  }
]
```

### Basic usage

```
import React from 'react'
import Circularity from 'circularity'

const items = [
  {
    title: 'Google please',
    image: '/google_icon.svg',
    action: 'http://google.com' 
  },
  {
    title: 'Alert me',
    image: '/image.svg',
    action: () => { alert('Hey you!') }
  }
]

class MyComponent extends React.Component {

  render() {
    return <Circularity diameter={ 400 } items={ items } />
  }

}

export default MyComponent
```
