import { createFileRoute } from '@tanstack/react-router'
import SignIn from '@/modules/auth/components/signin'

export const Route = createFileRoute('/_layout/(public)/login/')({
  component: SignIn,
})


