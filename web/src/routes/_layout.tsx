import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import PublicNavigation from "../shared/navigation/public-navigation";
import PrivateNavigation from "../shared/navigation/private-navigation";
import { useState, useEffect } from "react";

const checkAuth = () => {
  const token = localStorage.getItem("auth-token");
  return !!token;
};

const isProtectedRoute = (pathname: string) => {
  const protectedPaths = ['/dashboard', '/speech-to-text'];
  return protectedPaths.some(path => pathname.startsWith(path));
}

const MyApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

    useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(checkAuth());
    };

    window.addEventListener('authChanged', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('authChanged', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);
  return <>{!isAuthenticated ? <PublicLayout /> : <PrivateLayout />}</>;
};

export const Route = createFileRoute("/_layout")({
  beforeLoad: async ({ location }) => {
    if (isProtectedRoute(location.pathname) && !checkAuth()) {
      throw redirect({
        to: "/sign-in",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: MyApp,
});

const PublicLayout = () => {
  return (
    <>
      <PublicNavigation>
        <Outlet />
      </PublicNavigation>
    </>
  );
};

const PrivateLayout = () => {
  return (
    <>
      <PrivateNavigation>
        <Outlet />
      </PrivateNavigation>
    </>
  );
};
