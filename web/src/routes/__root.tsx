import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import AppProviders from '../shared/providers'




export const Route = createRootRoute({

  component: () => (
    <>
      <AppProviders>
        <Outlet />
      </AppProviders>
      <TanStackRouterDevtools />
    </>
  ),
})

