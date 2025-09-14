import { createFileRoute, Outlet } from "@tanstack/react-router";
import PublicNavigation from "../shared/navigation/public-navigation";
import PrivateNavigation from "../shared/navigation/private-navigation";


const MyApp = () => {
  const isAuthenticated = true;

  return <>{!isAuthenticated ? <PublicLayout /> : <PrivateLayout />}</>;
};

export const Route = createFileRoute("/_layout")({
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
