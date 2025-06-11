import '~/styles/pages/index.css'

export const Route = createFileRoute({
  component: Index,
})

function Index() {
  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-4xl font-bold'>
        <span role='img' aria-label='Heart'>
          💖
        </span>{' '}
        Hello World!
      </h1>
      <p>Welcome to your Electron application v{__VERSION__}.</p>
      <script type='module' src='/src/renderer.ts'></script>
    </div>
  )
}
