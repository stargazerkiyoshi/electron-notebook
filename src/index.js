import React from 'react'
import ReactDom from 'react-dom'
import { test } from './utils'

test()
ReactDom.render(<h1>helloworld</h1>, document.getElementById('root'))