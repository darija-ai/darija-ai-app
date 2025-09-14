import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../../../features/_landing/index'
import PublicLayout from '@/shared/layouts/public';


const RouteComponent = () => {
  return (
    <>
      <PublicLayout>
        <LandingPage />
      </PublicLayout>
    </>
  );
};

export const Route = createFileRoute('/_layout/(public)/')({
  component: RouteComponent,
})




