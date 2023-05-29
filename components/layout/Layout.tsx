import Navbar from "./Navbar/Main";
import Head from "next/head";
import Footer from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}


function Layout({children}:LayoutProps){
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            </Head>
            <Navbar/>
            <main className="min-h-screen sm:bg-services sm:bg-cover bg-none">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;