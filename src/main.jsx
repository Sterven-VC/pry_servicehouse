import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

// The page is already present in the response. Only attach its interactions.
const root = document.getElementById('root')
const year = Number(root.dataset.renderYear)
const page = root.dataset.page || 'home'

hydrateRoot(
  root,
  <React.StrictMode><App year={year} page={page} /></React.StrictMode>,
)
