import { createFileRoute } from '@tanstack/react-router'
import SignUp from '@/features/auth/components/sign-up'
import PublicLayout from '@/shared/layouts/public';


const RouteComponent = () => {
  return (
    <>
      <PublicLayout>
        <SignUp />
      </PublicLayout>
    </>
  );
};

export const Route = createFileRoute('/_layout/(public)/sign-up')({
  component: RouteComponent,
})



