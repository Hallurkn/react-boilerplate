import '@babel/polyfill'
import './src/styles/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/App'
import DefaultErrorBoundary from './src/DefaultErrorBoundary'

if (process.env.NODE_ENV === 'development') {
    const axe = require('react-axe')
    axe(React, ReactDOM, 1000)
}

ReactDOM.render(
    <React.StrictMode>
        <DefaultErrorBoundary>
            <App />
        </DefaultErrorBoundary>
    </React.StrictMode>,
    document.getElementById('app')
)
