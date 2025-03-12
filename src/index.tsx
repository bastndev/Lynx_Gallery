import { root } from '@lynx-js/react'

import { App as ImageCard } from './ImageCard.jsx'

root.render(<ImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
