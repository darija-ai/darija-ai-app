import { createRootRoute, Outlet } from "@tanstack/react-router";
import AppProviders from "../shared/providers";

export const Route = createRootRoute({
  component: () => (
    <>
      <AppProviders>
        <Outlet />
      </AppProviders>
    </>
  ),
});
