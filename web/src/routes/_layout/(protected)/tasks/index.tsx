import { AnnotationTasksPage } from '@/features/annotation/pages/tasks';
import PrivateNavigation from '@/shared/layouts/private';
import { createFileRoute } from '@tanstack/react-router'


const RouteComponent = () => {
  return (
    <PrivateNavigation>
      <AnnotationTasksPage />
    </PrivateNavigation>
  );
}

export const Route = createFileRoute('/_layout/(protected)/tasks/')({
  component: RouteComponent,
})
