import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="white" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Crack Fillers Caulking"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Service Areas",
              href: "#pricing"
            },
            {
              name: "Gallery",
              href: "#gallery-tilt-cards"
            },
            {
              name: "About",
              href: "#about"
            },
            {
              name: "Contact",
              href: "#contact-dark-form-card"
            }
          ]}
          cta={{
            text: "Call Now",
            href: "tel:9208384678"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="white" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="Crack Fillers Caulking"
          columns={[
            {
              title: "Services",
              links: [
                {
                  text: "Joint Sealants & Caulking",
                  href: "#services"
                },
                {
                  text: "Waterproofing",
                  href: "#services"
                },
                {
                  text: "Brick & Block Repair",
                  href: "#services"
                },
                {
                  text: "Tuckpointing",
                  href: "#services"
                }
              ]
            },
            {
              title: "Service Areas",
              links: [
                {
                  text: "Southeastern Wisconsin",
                  href: "#pricing"
                },
                {
                  text: "Fox Valley Region",
                  href: "#pricing"
                },
                {
                  text: "Northeastern Wisconsin",
                  href: "#pricing"
                }
              ]
            },
            {
              title: "Company",
              links: [
                {
                  text: "About Us",
                  href: "#about"
                },
                {
                  text: "Our Work",
                  href: "#gallery-tilt-cards"
                },
                {
                  text: "Get a Free Quote",
                  href: "#contact-dark-form-card"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "(920) 838-4678",
                  href: "tel:9208384678"
                },
                {
                  text: "crackfillerscaulking@gmail.com",
                  href: "mailto:crackfillerscaulking@gmail.com"
                },
                {
                  text: "Request a Quote",
                  href: "#contact-dark-form-card"
                }
              ]
            }
          ]}
          copyright="© 2026 Crack Fillers Caulking. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
