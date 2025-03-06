import { NavigationBar } from '@/components/ui/navigation-bar';
import { Footer } from '@/components/ui/footer';

const Layout = ({ children } : { children: React.ReactNode }) => {
    return(
        <div className="relative flex flex-col min-h-screen">
            <NavigationBar />
            <main className="relative flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;