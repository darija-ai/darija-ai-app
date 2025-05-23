import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import PublicNavigation from '../shared/navigation/public-navigation';
import PrivateNavigation from '../shared/navigation/private-navigation';

const checkAuth = () => {
  const isAuthenticated = true;
  return isAuthenticated;
}

const isProtectedRoute = (pathname: string) => {
  const protectedPaths = ['/dashboard', '/annotator'];
  return protectedPaths.some(path => pathname.startsWith(path));
}

const MyApp = () => {
  const isAuthenticated = checkAuth();
  return (
    <>
      {
        !isAuthenticated ? <PublicLayout /> : <PrivateLayout />
      }
    </>
  )
}

export const Route = createFileRoute('/_layout')({
  beforeLoad: async ({ location }) => {
    if (isProtectedRoute(location.pathname) && !checkAuth()) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: MyApp,
})

const PublicLayout = () => {
  return (
    <>
      <PublicNavigation>
        <Outlet />
      </PublicNavigation>
    </>
  )
};

const PrivateLayout = () => {
  return (
    <>
      <PrivateNavigation>
        <Outlet />
      </PrivateNavigation>
    </>
  )
};