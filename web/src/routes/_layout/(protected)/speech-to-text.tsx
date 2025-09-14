import { createFileRoute } from '@tanstack/react-router'
import AnnotatorPage from '../../../features/speech-to-text'
import PrivateNavigation from '@/shared/navigation/private-navigation';

const RouteComponent = () => {
  return (
    <PrivateNavigation>
      <AnnotatorPage />
    </PrivateNavigation>
  );
}

export const Route = createFileRoute('/_layout/(protected)/speech-to-text')({
  component: RouteComponent,
})




