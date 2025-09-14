import { createRootRoute, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";



function NotFoundPage() { // to be refactored later as import
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-7xl">
        Not found
      </h1>
    </div>
  )
}

const loadDevTools = () =>
  Promise.all([
    import("@tanstack/router-devtools"),
    import("@tanstack/react-query-devtools"),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    }
  });

const TanstackDevTools = process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevTools);

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanstackDevTools />
      </Suspense>
    </>
  ),
  notFoundComponent: () => <NotFoundPage />
});
