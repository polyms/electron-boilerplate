import { createRoot } from 'react-dom/client'

const root = createRoot(document.body)
root.render(
  <>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>
    <script type='module' src='/src/renderer.ts'></script>
  </>
)
