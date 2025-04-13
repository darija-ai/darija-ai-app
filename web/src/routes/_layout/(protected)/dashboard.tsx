import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/(protected)/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/protected/test-protected"!</div>
}
