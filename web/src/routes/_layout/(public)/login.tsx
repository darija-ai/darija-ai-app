import { createFileRoute } from '@tanstack/react-router'
import PublicLayout from '@/shared/layouts/public';
import Login from '@/features/auth/components/login';


const RouteComponent = () => {
  return (
    <>
      <PublicLayout>
        <Login />
      </PublicLayout>
    </>
  );
};

export const Route = createFileRoute('/_layout/(public)/login')({
  component: RouteComponent,
})



