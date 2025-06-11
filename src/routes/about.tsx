export const Route = createFileRoute({
  component: About,
})

function About() {
  return <div className='container mx-auto py-10'>Hello from About!</div>
}
