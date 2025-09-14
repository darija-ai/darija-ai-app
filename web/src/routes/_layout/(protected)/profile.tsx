import Profile from '@/features/profile/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/(protected)/profile')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Profile />
}
