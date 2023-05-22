import Navbar from "./Navbar/Main";
import Head from "next/head";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}

const overlay = (dropdownStatus) => <div className={`fixed inset-0 bg-black/[.5] h-screen ${dropdownStatus ? "z-10" : "-z-[100]"}`}></div>

function Layout({children}:LayoutProps){
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            </Head>
            <Navbar enableOverlay={(status) => overlay(status)}/>
            <div className="min-h-screen ">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;