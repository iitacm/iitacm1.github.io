import { ContactFooter } from "@/components/contact/contact-footer";
import { NavigationBar } from "@/components/ui/navigation-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col">
      <NavigationBar />
      <main className="relative flex-1 flex flex-col z-9">{children}</main>
      <ContactFooter />
    </div>
  );
};

export default Layout;
