import { createFileRoute } from '@tanstack/react-router'
import SignIn from '../../../../modules/signin/index.tsx'

export const Route = createFileRoute('/_layout/(public)/sign-in/')({
  component: SignIn,
})


