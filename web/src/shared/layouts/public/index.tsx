import { ReactNode } from "@tanstack/react-router"
import Footer from "./footer"
import {Navbar} from "./top-nav/navbar"

const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    )
}

export default PublicLayout;
