import { ReactNode } from "react"
import LayoutProvider from "./layout-provider"

const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <LayoutProvider>
            {children}
        </LayoutProvider>
    )
}

export default AppProviders
