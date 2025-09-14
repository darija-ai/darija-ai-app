import { createFileRoute } from '@tanstack/react-router'
import SignIn from '@/features/auth/components/signin'

export const Route = createFileRoute('/_layout/(public)/login/')({
  component: SignIn,
})


