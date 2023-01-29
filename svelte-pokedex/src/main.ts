import '@styles/index.scss'
import AppWithTQuery from './AppWithTQuery.svelte'

const app = new AppWithTQuery({
  target: document.getElementById('app')
})

export default app
