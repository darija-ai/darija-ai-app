import { ReactNode } from "@tanstack/react-router"
import TopNavigation from "./top-nav"
import Footer from "./footer"

const PublicNavigation = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <TopNavigation />
            {children}
            <Footer />
        </>
    )
}

export default PublicNavigation
