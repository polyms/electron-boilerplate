import { createRoot } from 'react-dom/client'

const root = createRoot(document.body)
root.render(
  <>
    <h1 className='text-4xl font-bold'>
      <span role='img' aria-label='Heart'>
        💖
      </span>{' '}
      Hello World!
    </h1>
    <p>Welcome to your Electron application.</p>
    <script type='module' src='/src/renderer.ts'></script>
  </>
)
