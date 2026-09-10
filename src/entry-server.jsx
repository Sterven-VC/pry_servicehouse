import { renderToString } from 'react-dom/server'
import App from './App'

export function render(page = 'home') {
  const year = new Date().getFullYear()
  return { html: renderToString(<App year={year} page={page} />), year }
}
