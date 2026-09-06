import { renderToString } from 'react-dom/server'
import App from './App'

export function render() {
  const year = new Date().getFullYear()
  return { html: renderToString(<App year={year} />), year }
}
