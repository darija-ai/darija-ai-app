import { createFileRoute, Outlet } from "@tanstack/react-router";


const MyApp = () => {

  return <><Outlet /></>;
};

export const Route = createFileRoute("/_layout")({
  component: MyApp,
});


