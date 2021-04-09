import React from 'react'

import Home from './containers/Home'

// https://reacttraining.com/react-router/web/example/sidebar

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
]
