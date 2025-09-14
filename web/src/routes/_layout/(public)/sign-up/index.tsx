import { createFileRoute } from '@tanstack/react-router'
import SignUp from '@/features/auth/components/signup'

export const Route = createFileRoute('/_layout/(public)/sign-up/')({
  component: SignUp,
})


