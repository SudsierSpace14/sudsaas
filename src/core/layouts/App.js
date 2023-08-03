import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

const hideNavPages = ['/success']

export default function AppLayout({ children }) {
    const router = useRouter()
    const hideNavbar = hideNavPages.includes(router.asPath)

    return (
        <>
            <Meta />
            {children}
            {hideNavbar ? null : <Navbar />}
        </>
    )
}
