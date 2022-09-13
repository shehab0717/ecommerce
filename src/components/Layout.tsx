import Navbar from "./Navbar/Navbar";


const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    return (
        <>
            <div className="mb-5">
                <Navbar />
            </div>
            <div className="container mx-auto">
                {children}
            </div>
        </>
    )
}

export default Layout;