import { createFileRoute } from '@tanstack/react-router'
import PrivateNavigation from '@/shared/layouts/private';
import { AnnotationInterface } from '@/features/annotation/annotation-interface';

const RouteComponent = () => {
  return (
    <PrivateNavigation>
      <AnnotationInterface />
    </PrivateNavigation>
  );
}

export const Route = createFileRoute('/_layout/(protected)/speech-to-text')({
  component: RouteComponent,
})




