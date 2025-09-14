import { PropsWithChildren } from "react"
import LayoutProvider from "./layout-provider"

const AppProviders = (props: PropsWithChildren) => {
    return (
        <LayoutProvider>
            {props.children}
        </LayoutProvider>
    )
}

export default AppProviders
