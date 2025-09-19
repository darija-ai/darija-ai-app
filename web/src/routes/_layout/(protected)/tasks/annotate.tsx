import { AnnotationInterface } from '@/features/annotation/annotation-interface';
import PrivateNavigation from '@/shared/layouts/private';
import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
  const { taskId } = Route.useSearch();
  
  return (
    <PrivateNavigation>
      <AnnotationInterface taskId={taskId} />
    </PrivateNavigation>
  );
}

export const Route = createFileRoute('/_layout/(protected)/tasks/annotate')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      taskId: Number(search.taskId) || undefined,
    }
  },
})


