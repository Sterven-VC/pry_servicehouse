import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-700.css'
import '@fontsource/manrope/latin-800.css'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource/barlow-condensed/latin-800.css'
import App from './App'

// The page is already present in the response. Only attach its interactions.
const root = document.getElementById('root')
const year = Number(root.dataset.renderYear)
const page = root.dataset.page || 'home'

hydrateRoot(
  root,
  <React.StrictMode><App year={year} page={page} /></React.StrictMode>,
)
