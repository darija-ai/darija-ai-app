import PrivateNavigation from '@/shared/layouts/private';
import { createFileRoute } from '@tanstack/react-router'


const RouteComponent = () => {
  return (
    <PrivateNavigation>
      <div>Hello "/protected/test-protected"!</div>
    </PrivateNavigation>
  );
}

export const Route = createFileRoute('/_layout/(protected)/dashboard')({
  component: RouteComponent,
})

