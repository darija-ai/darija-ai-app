import { createFileRoute } from '@tanstack/react-router'
import SignUp from '../../../../features/signup/index.tsx'

export const Route = createFileRoute('/_layout/(public)/sign-up/')({
  component: SignUp,
})


