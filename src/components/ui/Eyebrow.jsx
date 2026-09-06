export function Eyebrow({ children, light = false }) {
  return <div className={light ? 'eyebrow light' : 'eyebrow'}><span />{children}</div>
}
